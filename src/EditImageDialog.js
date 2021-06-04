import { AlertDialog, Button, ButtonGroup, Checkbox, CheckboxGroup, Content, Dialog, DialogTrigger, Divider, Flex, Form, Heading, Item, NumberField, Picker, Radio, RadioGroup, Switch, Text, TextArea, TextField} from "@adobe/react-spectrum";
import { useState } from "react";

export function EditImageDialog(props) {
  let [form, setForm] = useState({});

  return (
    <Dialog>
      <Heading>Edit and resize image</Heading>
      <Divider />
      <Content>
        <Text>Kitchen sink</Text>
        <Form width="100%">
          <TextField label="Filename" autofocus onChange={(value) => {
              setForm({
                ...form,
                filename: value
              });
            }} />
          <TextArea label="Alt tag" onChange={(value) => {
              setForm({
                ...form,
                alt: value
              });
            }} />
          <CheckboxGroup label="Adjust" onChange={(value) => {
              setForm({
                ...form,
                adjust: value
              });
            }}>
            <Checkbox value="scale">Scale proportionally</Checkbox>
            <Checkbox value="resample">Resample Image</Checkbox>
          </CheckboxGroup>
          <NumberField label="Width" minValue={0} onChange={(value) => {
              setForm({
                ...form,
                width: value
              });
            }} />
          <NumberField label="Height" minValue={0} onChange={(value) => {
              setForm({
                ...form,
                height: value
              });
            }} />
          <NumberField label="Resolution" minValue={0} onChange={(value) => {
              setForm({
                ...form,
                resolution: value
              });
            }} />
          <Picker label="Units" onSelectionChange={(value) => {
              setForm({
                ...form,
                units: value
              });
            }}>
            <Item key="pxs">pixels</Item>
            <Item key="pct">percent</Item>
            <Item key="in">inches</Item>
            <Item key="cm">cm</Item>
            <Item key="pts">points</Item>
          </Picker>
          <RadioGroup label="Transform" onChange={(value) => {
              setForm({
                ...form,
                transform: value
              });
            }}>
            <Radio value="dogs">Rotate left</Radio>
            <Radio value="cats">Rotate right</Radio>
            <Radio value="cats">Flip horizontal</Radio>
            <Radio value="cats">Flip vertical</Radio>
          </RadioGroup>
          <Switch onChange={(value) => {
              setForm({
                ...form,
                actual: value
              });
            }}>Actual Size</Switch>
          <ButtonGroup>
            <Button variant="secondary" onPress={props.close}>
              Cancel
            </Button>
            <DialogTrigger>
              <Button variant="primary">
                Confirm
              </Button>
              <AlertDialog
                title="Image data"
                variant="information"
                primaryActionLabel="Close">
                <Content>
                  <Flex direction="column" gap="size-100">
                    <Text>Filename: {form.filename}</Text>
                    <Text>Alt tag: {form.alt}</Text>
                    <Text>Adjust: {form.adjust.join(', ')}</Text>
                    <Text>Width: {form.width}</Text>
                    <Text>Height: {form.height}</Text>
                    <Text>Resolution: {form.resolution}</Text>
                    <Text>Units: {form.units}</Text>
                    <Text>Transform: {form.transform}</Text>
                    <Text>Actual: {form.actual}</Text>
                  </Flex>
                </Content>
              </AlertDialog>
            </DialogTrigger>
          </ButtonGroup>
        </Form>
      </Content>
    </Dialog>
  );
}
