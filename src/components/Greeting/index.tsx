import { useTheme } from "styled-components";
import { Section, Image, Text } from "atoms";
import avatar from "assets/images/cat.webp";
import BackgroundImage from "assets/images/background.webp";
import SC from "./styles";

const Greeting = () => {
  const { palette } = useTheme();

  return (
    <Section bgImage={BackgroundImage}>
      <SC.Wrapper>
        <SC.Column>
          <SC.Info>
            <Text type="h1" color={palette.primary.contrastText}>
              Hi, I'm Vuong Vu
            </Text>
            <Text type="h2" color={palette.primary.contrastText}>
              Frontend Web Developer
            </Text>
          </SC.Info>
        </SC.Column>
        <SC.Column>
          <Image src={avatar} alt="avatar" />
        </SC.Column>
      </SC.Wrapper>
    </Section>
  );
};

export default Greeting;
