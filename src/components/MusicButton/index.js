// MusicButton.js
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import * as S from './MusicBtn.style'

const MusicButton = ({ musicUrl }) => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Kiểm tra xem bài hát hiện tại đã kết thúc hay chưa
    const handleEnded = () => {
      // Nếu đang phát ở bài hát cuối cùng, quay lại bài hát đầu tiên
      if (currentTrackIndex === musicUrl.length - 1) {
        setCurrentTrackIndex(0);
      } else {
        // Ngược lại, chuyển sang bài hát tiếp theo
        setCurrentTrackIndex(currentTrackIndex + 1);
      }
    };

    // Thiết lập sự kiện ended cho audio element
    audioRef.current.addEventListener('ended', handleEnded);

    // Cleanup function
    // return () => {
    //   audioRef.current.removeEventListener('ended', handleEnded);
    // };
  }, [currentTrackIndex, musicUrl]);

  // useEffect(() => {
  //   if (audioRef.current && musicUrl[currentTrackIndex]) {
  //     audioRef.current.src = musicUrl[currentTrackIndex];
  //     if (isPlaying) {
  //       audioRef.current.play(); // Nếu đang phát, tự động phát bài hát mới
  //     } else {
  //       audioRef.current.pause(); 
  //     }
  //   }
  // }, [currentTrackIndex, isPlaying, musicUrl]);

  return (
    <S.Container>
      <Button type="primary" shape="circle" size='large' onClick={togglePlay}>
        {isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
      </Button>
      <audio ref={audioRef} src={musicUrl[currentTrackIndex]} autoPlay />
    </S.Container>
  );
};

export default MusicButton;
