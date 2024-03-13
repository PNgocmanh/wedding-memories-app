import { MEMORIES } from "../../constants/actions";
import { memoryService } from "../../services/postService"
import { UploadImage } from "../../services/uploadService";


export const getAllMemories = (navigate) => async(dispatch) => {
  dispatch({
    type: MEMORIES.GET_LIST_MEMORIES_REQUEST
  })
  try {
    const data = await memoryService.getAll();

    dispatch({
      type: MEMORIES.GET_LIST_MEMORIES_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: MEMORIES.GET_LIST_MEMORIES_FAILURE,
      payload: error
    })
  }
}

export const AddNewMemories = (data) => async(dispatch) => {
  dispatch({
    type: MEMORIES.CREATE_NEW_MEMORIES_REQUEST
  })
  try {

    const res = await memoryService.createMemory(data);
    
    dispatch({
      type: MEMORIES.CREATE_NEW_MEMORIES_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: MEMORIES.CREATE_NEW_MEMORIES_FAILURE,
      payload: error
    })
  }
}