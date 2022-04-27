import { Button, Input, Textarea } from '../UI';
import { FormField, FormWrapper as Wrapper } from './Form.styles';

const Form = () => {
  return (
    <Wrapper>
      <FormField>
        <Input placeholder="Type your beautiful name..." required />
        <Input placeholder="Type your beautiful email address..." required />
        <Textarea rows={10} placeholder="Type your message..." required />
        <Button type="submit" variant="secondary">
          SEND THAT MESSAGE
        </Button>
      </FormField>
    </Wrapper>
  );
};

export default Form;
