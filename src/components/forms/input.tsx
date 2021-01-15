import { FC } from 'react';
import { Form /* ,Input */ } from 'antd';
import { InputProps } from 'antd/lib/input';
import { /* useForm, */ UseFormMethods } from 'react-hook-form';

const { Item } = Form;

type Props = InputProps & {
  label?: string;
  register: UseFormMethods;
};

export const InputWithValidation: FC<Props> = (props) => {
  const { label, name } = props;
  //   const { register, handleSubmit } = useForm<IFormInput>();

  return (
    <>
      <Item label={label} name={name}>
        {/* <Input name={name} ref={register} /> */}
      </Item>
    </>
  );
};
