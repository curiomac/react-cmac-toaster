import { AnimationComponentProps } from "../@types/toastTypes";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const getLottieURL = (props: AnimationComponentProps) => {
  const { toastStatus } = props;
  if (toastStatus === "success") {
    return "https://lottie.host/125c0ee8-bc43-45ad-9007-c6bd84f1d2c8/r7lgvewrQa.lottie";
  } else if (toastStatus === "error") {
    return "https://lottie.host/9aa07752-49e5-4c40-a0e2-31d4b8da9780/rBOFmES8nO.lottie";
  } else if (toastStatus === "warning") {
    return "https://lottie.host/bb66b61f-b246-4771-bb89-fe7ef73ee726/6joxn2x3fw.lottie";
  } else if (toastStatus === "notify") {
    return "https://lottie.host/477241f3-e298-4f14-9ee2-0289ebe7145f/ZChT8URgPs.lottie";
  }
};

const AnimationComponent = (props: AnimationComponentProps) => {
  const { toastStatus } = props;
  if (toastStatus === "default") {
    return <></>;
  } else {
    return (
      <DotLottieReact
        src={getLottieURL(props)}
        autoplay
        speed={0.9}
        height={81}
        width={163}
        style={{
          overflow: "hidden",
          width: "60px",
          marginLeft: "-23px",
        }}
      />
    );
  }
};

export default AnimationComponent;
