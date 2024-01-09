import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type contactEmailProps = {
  message: string;
  email: string;
};

const CustomEmail = ({ message, email }: contactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site🙋🏻</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black/30 my-10 px-10 py-2 rounded-md">
              <Heading className="leading-tight">
                Hey, You got new message!
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>From: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default CustomEmail;
