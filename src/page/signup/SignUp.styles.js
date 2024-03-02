import { FONT_SIZE, FONT_WEIGHT, media } from '../../constants/theme';
import styled, { css } from 'styled-components';
import { Button, Card, Checkbox, Form, Input, Row, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

export const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: var(--background-color);
`

export const Container = styled(Row)({
  display: 'flex',
  flexDirection : 'column',
  alignItems: 'center',
})

export const FormTitle = styled.div`
  color: var(--primary-color);

  @media only screen and (${media.xs}) {
    margin-bottom: 0.625rem;
    font-size: ${FONT_SIZE.lg};
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 1.5625rem;
  }

  @media only screen and (${media.md}) {
    margin-bottom: 0.875rem;
    font-size: ${FONT_SIZE.xxl};
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 1.9375rem;
  }

  @media only screen and (${media.xl}) {
    margin-bottom: 0.9375rem;
    font-size: ${FONT_SIZE.xxxl};
    font-weight: ${FONT_WEIGHT.extraBold};
    line-height: 2.125rem;
  }
`;

export const FormCheckbox = styled(Checkbox)`
  display: flex;
  padding-left: 0.125rem;

  & .ant-checkbox-inner {
    border-radius: 3px;
    transform: scale(1.375);
  }

  & .ant-checkbox-input {
    transform: scale(1.375);
  }
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: 0.75rem;
  & .ant-form-item-control-input {
    min-height: 3.125rem;
  }

  & .ant-form-item-explain-error {
    font-size: ${FONT_SIZE.xs};
  }

  & label {
    /* color: var(--primary-color); */
    color: blue;
    font-size: ${FONT_SIZE.xs};
    line-height: 1.25rem;
  }

  &.ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input-suffix {
    padding-right: 1.5rem;
  }
`;

export const CommonInput = styled(Input)`
  .ant-input-group-addon:first-child,
  .ant-input-group-addon:last-child {
    min-width: 5.5rem;
    color: var(--primary-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.lg};
  }

  .ant-input-group-addon .ant-select {
    .ant-select-selection-item {
      min-width: 5.5rem;
      color: var(--primary-color);
      font-weight: ${FONT_WEIGHT.semibold};
      font-size: ${FONT_SIZE.lg};
    }
  }

  .ant-select-arrow {
    color: var(--disabled-color);
  }
`;


export const FormInput = styled(CommonInput)`
  color: var(--text-main-color);
  background: transparent;
  padding: 10px;

  & input.ant-input {
    background: transparent;
    max-height: 1.5rem;
  }
`;

export const FormInputPassword = styled(Input.Password)`
  color: var(--text-main-color);
  background: transparent;
  padding: 10px;

  & input.ant-input {
    background: transparent;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Text = styled.span`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.regular};
`;

export const LinkText = styled(Text)`
  text-decoration: underline;
  color: var(--primary-color);
`;

export const SubmitButton = styled(Button)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  width: 100%;
  height: 2.75rem;
`;

export const FooterWrapper = styled.div`
  margin-top: 1.25rem;
  text-align: center;
`;

export const BackWrapper = styled.div`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1.25rem;
`;

export const LoginDescription = styled.div`
  margin-bottom: 1.875rem;
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};

  @media only screen and (${media.xs}) {
    margin-bottom: 1.5625rem;
    font-weight: ${FONT_WEIGHT.bold};
  }

  @media only screen and (${media.md}) {
    margin-bottom: 1.75rem;
    font-weight: ${FONT_WEIGHT.regular};
  }

  @media only screen and (${media.xl}) {
    margin-bottom: 1.875rem;
  }
`;

export const RememberMeText = styled.span`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.xs};
`;

export const LabelHeading = styled.div`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.lg};
  font-weight: ${FONT_WEIGHT.bold};
`