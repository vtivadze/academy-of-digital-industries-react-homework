import { BlueButton } from "../../components/blueButton";
import { RedButton } from "../../components/redButton";

export const StyleModule = () => {
  return (
    <>
      <h1 className="title">Style Module Page</h1>
      <RedButton content="I am a red button" />
      <BlueButton content="I am a blue button" />
    </>
  );
};