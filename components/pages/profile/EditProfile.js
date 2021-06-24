import { Button, Form, Input } from "antd"
import { updateProfile } from "../../../service/service";

const EditProfile = ({email, token}) => {
    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 22 },
      };
      const tailLayout = {
        wrapperCol: { offset: 2, span: 22 },
      };
      const onFinish = (values) => {
          updateProfile(token, values);
      }
    return (
        <Form {...layout} onFinish={onFinish} initialValues={{email: email}}>
            <Form.Item name="email" label="Email">
                <Input />
            </Form.Item>
            <Form.Item name="mobile" label="Contact">
                <Input />
            </Form.Item>
            <Form.Item name="gender" label="Gender">
                <Input />
            </Form.Item>
            <Form.Item name="country" label="Country">
                <Input />
            </Form.Item>
            <Form.Item name="city" label="City">
                <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button htmlType="submit" type="primary">Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default EditProfile
