import { Input, InputGroup } from 'rsuite';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';


const FormInputGroup = () => {

    return (
        <InputGroup inside>
            <InputGroup.Addon>
                <AvatarIcon />
            </InputGroup.Addon>
            <Input />
      </InputGroup>
    );
};
export default FormInputGroup;