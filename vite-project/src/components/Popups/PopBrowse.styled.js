import styled from "styled-components";

export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;
export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;
export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 700px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;
export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
  margin-bottom: 20px;
`;
export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;
export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
export const Main = styled.main`
  position: absolute;
  width: 100%;
  background-color: #eaeef6;
`;
export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 85px 0 49px;
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;
`;

export const PopNewCard = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;
export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;
export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 700px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;
export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;
export const PopNewCardTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;
export const PopNewCardClose = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  :hover {
    color: #000000;
  }
`;
export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  color: black;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  margin: 20px 0;
  letter-spacing: -0.14px;
  ::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;
export const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  color: black;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  line-height: 1;
  letter-spacing: -0.14px;
  ::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;
export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;
export const StatusPSubttl = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusThemeHide = styled.div`
  border-radius: 24px;
  border: 0.7px solid #94a6be66;
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  display: block;
  background-color: #94a6be;
  color: #ffffff;
  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;
export const CategoryTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 4px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: #b4fdd1;
  color: #06b16e;
  p {
    opacity: 1 !important;
  }
`;
export const CategoriesTheme = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 2px 16px;
  border-radius: 24px;
  opacity: 0.3;
  background-color: #94a6be;
  &:hover {
    opacity: 1;
    color: #ffffff;
  }
`;
export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: #94a6be;
  ::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;
export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 15px;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    gap: 8px;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;
export const BtnBrowseEditBtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  margin-bottom: 10px;
  padding: 0 14px;
  height: 30px;
  margin-right: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;
export const BtnBrowseClose = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  margin-bottom: 10px;
  margin-right: 8px;
  padding: 0 14px;
  height: 30px;
`;
export const NewCardCategoris = styled.div`
  margin-bottom: 20px;
  & p {
    margin-bottom: 14px;
  }
`;

const topicTheme = {
  "Web Design": {
    backgroundColor: "#E9D4FF",
    color: "#9a48f1",
  },
  Research: {
    backgroundColor: "#B4FDD1",
    color: "#06b16e",
  },
  Copywriting: {
    backgroundColor: "#FFE4C2",
    color: "#ff6d00",
  },
};

export const NewCardCategorisThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const NewCardCategorisTheme = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 4px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${(props) =>
    topicTheme[props.$topic]?.backgroundColor || "gray"};

  color: ${(props) => topicTheme[props.$topic]?.color || "black"};
`;
export const CategoriesThemeOrangeLabel = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 4px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: #ffe4c2;
  color: #ff6d00;
  &:hover {
    opacity: 1 !important;
  }
`;

export const CategoriesThemeOrangeInput = styled.input`
  display: none;
  &:checked + label {
    opacity: 1 !important;
  }
`;

export const CategoriesThemeGreenLabel = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 4px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: #b4fdd1;
  color: #06b16e;

  &:hover {
    opacity: 1 !important;
  }
`;

export const CategoriesThemeGreenInput = styled.input`
  display: none;
  &:checked + label {
    opacity: 1 !important;
  }
`;

export const CategoriesThemePurpleLabel = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 4px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: #e9d4ff;
  color: #9a48f1;
  &:hover {
    opacity: 1 !important;
  }
`;

export const CategoriesThemePurpleInput = styled.input`
  display: none;
  &:checked + label {
    opacity: 1 !important;
  }
`;

export const NewCardFormInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;
export const BtnBrowseEdit = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
`;

export const PopBrowseStatusThemeInput = styled.input`
  display: none;
  &:checked + label {
    opacity: 1 !important;
    background-color: #94a6be;
    color: #ffffff;
  }
`;
export const Test = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const FormNewCreate = styled.button`
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  :hover {
    background-color: #33399b;
  }
`;
export const PopExit = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  :target {
    display: block;
  }
`;
export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;
export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;
export const PopExitTtl = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`;
export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PopExitExitYes = styled.button`
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;
  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    background-color: #33399b;
  }
`;
export const PopExitExitNo = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  a {
    width: 100%;
    height: 100%;
    color: #565eef;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
