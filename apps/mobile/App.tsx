import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ThemeProvider } from "styled-components/native";
import { LightTheme, DarkTheme } from "./utils/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import InputField from "./components/InputField";

const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.background.backgroundColor};
  padding: 100px 20px;
`;

const Paragraph = styled.Text`
  color: ${({ theme }) => theme.text.textColor};
  text-align: center;
  font-size: 16px;
`;

const ThemeButton = styled.Pressable`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text.textColor};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background.backgroundColorLight};
`;

const FormButton = styled.Pressable`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text.textColor};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background.backgroundColorLight};
  margin-bottom: 10px;
`;

const InputContainer = styled.View``;

const ButtonContainer = styled.View``;

const initialState = {
  webhookUrl: "",
  webhookUsername: "",
  webhookAvatarUrl: "",
  message: "",
  embedAuthorName: "",
  embedAuthorUrl: "",
  embedTitle: "",
  embedAuthorIconUrl: "",
  embedUrl: "",
  embedDescription: "",
  embedColor: "",
  embedThumbnail: "",
  embedImage: "",
  fieldName: "",
  fieldValue: "",
  fieldInline: "",
  footerText: "",
  footerIcon: "",
  timestamp: "",
};

export default function App() {
  const [allValues, setAllValues] = useState(initialState);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    getTheme();
  }, []);
  const getTheme = async () => {
    try {
      // TODO replace async storage with mmkv
      const themeValue = await AsyncStorage.getItem("@theme");
      if (themeValue) setTheme(themeValue);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleTheme = async () => {
    const themeValue = theme === "dark" ? "light" : "dark";
    try {
      await AsyncStorage.setItem("@theme", themeValue);
      setTheme(themeValue);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    fetch(allValues.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: allValues.webhookUsername,
        avatar_url: allValues.webhookAvatarUrl,
        content: allValues.message,
      }),
    });
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
        <Wrapper
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InputContainer>
            <InputField
              placeholder="The URL of the webhook you're sending to."
              onChanged={changedValue =>
                setAllValues({ ...allValues, webhookUrl: changedValue })
              }
              onSubmitEditing={handleSubmit}
              defaultValue={allValues.webhookUrl}
              name="Webhook URL"
              maxLength={121}
            />
            <InputField
              placeholder="Webhook username"
              onChanged={changedValue =>
                setAllValues({ ...allValues, webhookUsername: changedValue })
              }
              onSubmitEditing={handleSubmit}
              defaultValue={allValues.webhookUsername}
              name="Webhook username"
              maxLength={80}
              maxCharacterCount
              setMaxCharacterCount={80}
            />
            <InputField
              placeholder="Webhook avatar"
              onChanged={changedValue =>
                setAllValues({ ...allValues, webhookAvatarUrl: changedValue })
              }
              onSubmitEditing={handleSubmit}
              defaultValue={allValues.webhookAvatarUrl}
              name="Webhook avatar URL"
            />
            <InputField
              placeholder="Message"
              isLongText
              onChanged={changedValue =>
                setAllValues({ ...allValues, message: changedValue })
              }
              onSubmitEditing={handleSubmit}
              defaultValue={allValues.message}
              name="Content"
              maxLength={2000}
              maxCharacterCount
              setMaxCharacterCount={2000}
            />
            <ButtonContainer>
              <FormButton onPress={() => handleSubmit()}>
                <Paragraph>Submit</Paragraph>
              </FormButton>
              <FormButton onPress={() => setAllValues(initialState)}>
                <Paragraph>Reset</Paragraph>
              </FormButton>
              <ThemeButton onPress={() => toggleTheme()}>
                <Paragraph>
                  {theme === "dark" ? "Light" : "Dark"} Mode
                </Paragraph>
              </ThemeButton>
            </ButtonContainer>
          </InputContainer>
        </Wrapper>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
