import styled, {
  DarkTheme,
  GlobalStyles,
  LightTheme,
  ThemeProvider,
  usePreferredTheme,
  FormButton,
  ThemeButton,
  TextInputField,
  FormInputField,
} from "@cordhook/ui";

const Wrapper = styled.div`
  flex-direction: column;
  gap: 40px;
  display: flex;
  padding: 60px 16% 60px 16%;

  @media (max-width: 950px) {
    padding: 60px 10% 60px 10%;
  }
`;

const SetupContainer = styled.div``;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
`;

const SectionTitle = styled.p`
  color: ${({ theme }) => theme.text.textColorLight};
  font-weight: bold;
  font-size: x-large;
`;

const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

const ColorPicker = styled.input.attrs({ type: "color" })`
  width: 70px;
  height: 70px;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
  border-radius: 5px;

  ::-webkit-color-swatch {
    border: none;
    border-radius: 5px;
  }

  ::-moz-color-swatch {
    border: none;
    border-radius: 5px;
  }
`;

const HorizontalLine = styled.hr`
  border: 1.5px solid ${({ theme }) => theme.background.backgroundColorLight};
  border-radius: 15px;
`;

const Card = styled.div`
  padding: 30px 2.5rem 30px 2.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background.backgroundColorLight};
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 950px) {
    padding: 30px 1.5rem 30px 1.5rem;
  }
`;

const SectionSubtitle = styled.p`
  color: ${({ theme }) => theme.text.textColorLight};
  font-weight: normal;
  font-size: medium;
`;

const InlineCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 0.7rem;
`;

const InlineLabel = styled.label`
  color: ${({ theme }) => theme.text.textColorDark};
  vertical-align: middle;
`;

interface InitialStateProps {
  colorPicker: string;
}

const CordhookInterface = ({
  onSubmit,
  colorPickerValue,
  setColorPickerValue,
  initialState,
}: {
  onSubmit: (event: any) => void;
  colorPickerValue: string;
  setColorPickerValue: React.Dispatch<React.SetStateAction<string>>;
  initialState: InitialStateProps;
}) => {
  const preferredTheme = usePreferredTheme();
  const changeColor = (e: any) => {
    setColorPickerValue(e.target.value);
  };

  return (
    <ThemeProvider theme={preferredTheme === "dark" ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <Wrapper>
        <SetupContainer>
          <StyledForm id={"webhook_form"} onSubmit={onSubmit}>
            {/* Webhook */}
            <SectionTitle>Webhook</SectionTitle>
            <SectionSubtitle>Webhook setup</SectionSubtitle>
            <Card>
              <FormInputField
                title={"Webhook URL"}
                subtitle={"The URL of the webhook you're sending to."}
                form={"webhook_form"}
                placeholder={"https://discord.com/api/webhooks/.../..."}
                name={"webhook_url"}
                id={"webhook_url"}
                type={"url"}
                pattern={"https://discord.com/api/webhooks/.*"}
                // I found out that some Discord webhook URLs have 120 strings and some have 121 so that's why the maxLength value below is set to 121, initially it was set to 120.
                maxLength={121}
                minLength={120}
                required={true}
              />
              <FormInputField
                title={"Webhook username"}
                subtitle={"Webhook username"}
                form={"webhook_form"}
                name={"webhook_username"}
                id={"webhook_username"}
                type={"text"}
                maxCharacterCount={80}
                maxLength={80}
                required={false}
              />
              <FormInputField
                title={"Webhook avatar"}
                subtitle={"Webhook avatar URL"}
                form={"webhook_form"}
                name={"webhook_avatar_url"}
                id={"webhook_avatar_url"}
                type={"url"}
                required={false}
              />
            </Card>
            <HorizontalLine />
            {/* Content */}
            <SectionTitle>Content</SectionTitle>
            <TextInputField
              title={"Message"}
              placeholder={
                "Write an introduction message here with a simple explanation and instructions."
              }
              name={"message"}
              id={"message"}
              maxLength={2000}
              required={false}
              maxCharacterCount={2000}
              form={"webhook_form"}
            />
            <HorizontalLine />
            {/* Embed */}
            <SectionTitle>Embed</SectionTitle>
            <SectionSubtitle>Author information</SectionSubtitle>
            <Card>
              <FormInputField
                title={"Author name"}
                subtitle={"Embed author's name"}
                form={"webhook_form"}
                name={"embed_author_name"}
                id={"embed_author_name"}
                type={"text"}
                maxCharacterCount={256}
                maxLength={256}
                required={false}
              />
              <FormInputField
                title={"Author URL"}
                subtitle={"Author URL"}
                form={"webhook_form"}
                name={"embed_author_url"}
                id={"embed_author_url"}
                type={"url"}
                required={false}
              />
              <FormInputField
                title={"Author icon URL"}
                subtitle={"Embed author's icon"}
                form={"webhook_form"}
                name={"embed_author_icon_url"}
                id={"embed_author_icon_url"}
                type={"url"}
                required={false}
              />
            </Card>
            <SectionSubtitle>Embed information</SectionSubtitle>
            <Card>
              <FormInputField
                title={"Embed title"}
                subtitle={"Embed title"}
                form={"webhook_form"}
                name={"embed_title"}
                id={"embed_title"}
                type={"text"}
                maxCharacterCount={256}
                maxLength={256}
                required={false}
              />
              <FormInputField
                title={"Embed URL"}
                subtitle={"Embed URL"}
                form={"webhook_form"}
                name={"embed_url"}
                id={"embed_url"}
                type={"url"}
                required={false}
              />
              <TextInputField
                title={"Embed description"}
                placeholder={
                  "Write an introduction message here with a simple explanation and instructions."
                }
                name={"embed_description"}
                id={"embed_description"}
                maxLength={4096}
                required={false}
                maxCharacterCount={4096}
                form={"webhook_form"}
              />
              <ColorPickerContainer>
                <FormInputField
                  title={"Embed color"}
                  subtitle={"Color of the embed"}
                  form={"webhook_form"}
                  placeholder={"#rrggbb"}
                  id={"embed_color"}
                  name={"embed_color"}
                  type={"text"}
                  maxLength={7}
                  pattern={"#.*"}
                  required={false}
                  value={colorPickerValue}
                  onChanged={changeColor}
                />
                <ColorPicker
                  id={"embed_color"}
                  name={"embed_color"}
                  required={false}
                  value={colorPickerValue}
                  onChange={changeColor}
                />
              </ColorPickerContainer>
              <FormInputField
                title={"Embed thumbnail"}
                subtitle={"Embed thumbnail URL"}
                form={"webhook_form"}
                name={"embed_thumbnail"}
                id={"embed_thumbnail"}
                type={"url"}
                required={false}
              />
              <FormInputField
                title={"Embed image"}
                subtitle={"Embed image URL"}
                form={"webhook_form"}
                name={"embed_image"}
                id={"embed_image"}
                type={"url"}
                required={false}
              />
            </Card>
            <SectionSubtitle>Field information</SectionSubtitle>
            <Card>
              <FormInputField
                title={"Field name"}
                subtitle={"Field name"}
                form={"webhook_form"}
                name={"field_name"}
                id={"field_name"}
                type={"text"}
                maxCharacterCount={256}
                maxLength={256}
                required={false}
                component={
                  <>
                    <InlineLabel htmlFor="field_inline">
                      <InlineCheckbox
                        title={"Inline"}
                        name={"field_inline"}
                        form={"webhook_form"}
                        id={"field_inline"}
                        type={"checkbox"}
                        required={false}
                      />
                      Inline
                    </InlineLabel>
                  </>
                }
              />
              <TextInputField
                title={"Field value"}
                placeholder={
                  "Write an introduction message here with a simple explanation and instructions."
                }
                name={"field_value"}
                id={"field_value"}
                maxLength={1024}
                required={false}
                maxCharacterCount={1024}
                form={"webhook_form"}
              />
            </Card>
            <SectionSubtitle>Footer information</SectionSubtitle>
            <Card>
              <TextInputField
                title={"Footer text"}
                placeholder={
                  "Write an introduction message here with a simple explanation and instructions."
                }
                name={"footer_text"}
                id={"footer_text"}
                maxLength={2048}
                required={false}
                maxCharacterCount={2048}
                form={"webhook_form"}
              />
              <FormInputField
                title={"Footer icon"}
                subtitle={"Footer icon URL"}
                form={"webhook_form"}
                name={"footer_icon"}
                id={"footer_icon"}
                type={"url"}
                required={false}
              />
              <FormInputField
                title={"Timestamp"}
                subtitle={"Time when the embed was sent"}
                form={"webhook_form"}
                name={"timestamp"}
                id={"timestamp"}
                type={"datetime-local"}
                required={false}
              />
            </Card>
            <ButtonWrapper>
              <ButtonContainer>
                <FormButton
                  type={"submit"}
                  value={"🕸  Send webhook"}
                  form={"webhook_form"}
                  name={"Submit form button"}
                />
                <FormButton
                  type={"reset"}
                  value={"🗑  Reset"}
                  form={"webhook_form"}
                  name={"Reset form button"}
                  onClick={() => {
                    setColorPickerValue(initialState.colorPicker);
                  }}
                />
              </ButtonContainer>
              <ThemeButton />
            </ButtonWrapper>
          </StyledForm>
        </SetupContainer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default CordhookInterface;
