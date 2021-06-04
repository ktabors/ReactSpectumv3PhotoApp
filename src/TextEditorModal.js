import { ActionGroup, Button, ButtonGroup, Content, Dialog, Divider, Flex, Heading, Item, Text, TextArea, TextField, Well} from "@adobe/react-spectrum";
import { ComboBox, Item as ComboBoxItem } from '@react-spectrum/combobox'
import { Item as TabItem, TabList, TabPanels, Tabs } from "@react-spectrum/tabs";
import TagBold from "@spectrum-icons/workflow/TagBold";
import TagItalic from "@spectrum-icons/workflow/TagItalic";
import TagUnderline from "@spectrum-icons/workflow/TagUnderline";
import TextAlignCenter from "@spectrum-icons/workflow/TextAlignCenter";
import TextAlignJustify from "@spectrum-icons/workflow/TextAlignJustify";
import TextAlignLeft from "@spectrum-icons/workflow/TextAlignLeft";
import TextAlignRight from "@spectrum-icons/workflow/TextAlignRight";
import TextStrikethrough from "@spectrum-icons/workflow/TextStrikethrough";
import { useState } from "react"

let fonts = [
  {id: 1, name: 'Serif', cssValue: 'serif'},
  {id: 2, name: 'Sans serif', cssValue: 'sans-serif'},
  {id: 3, name: 'Monospace', cssValue: 'monospace'},
  {id: 4, name: 'Cursive', cssValue: 'cursive'},
  {id: 5, name: 'Fantasy', cssValue: 'fantasy'},
  {id: 6, name: 'System-ui', cssValue: 'system-ui'},
  {id: 7, name: 'UI erif', cssValue: 'ui-serif'},
  {id: 8, name: 'UI sans serif', cssValue: 'ui-sans-serif'},
  {id: 9, name: 'UI monospace', cssValue: 'ui-monospace'},
  {id: 10, name: 'UI rounded', cssValue: 'ui-rounded'},
  {id: 11, name: 'Emoji', cssValue: 'emoji'},
  {id: 12, name: 'Math', cssValue: 'math'},
  {id: 13, name: 'Fangsong', cssValue: 'fangsong'},
  {id: 13, name: 'Adobe clean', cssValue: 'adobe-clean-ux,adobe-clean,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif'}
];

export function TextEditorModal(props) {
  let [editorValue, setEditorValue] = useState('Why is focus hosed');
  let [fontFilters, setFontFilters] = useState(new Set([]));
  let [alignFilters, setAlignFilters] = useState(new Set(['left']));
  let [fontFamily, setFontFamily] = useState('adobe-clean-ux,adobe-clean,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif');

  let cssFilterStyles = {
    fontFamily: fontFamily,
    fontStyle: fontFilters.has('italic') ? 'italic' : 'normal',
    fontWeight: fontFilters.has('bold') ? 'bold' : 'normal',
    textAlign: [...alignFilters],
    textDecoration: (fontFilters.has('underline') ? 'underline' : '') + (fontFilters.has('strike') ? ' line-through' : '')
  };

  return (
    <Dialog>
      <Heading>WYSIWYG Editor</Heading>
      <Divider />
      <Content>
        <Flex direction="row" gap="size-100">
          <ActionGroup
            aria-label="Text style"
            overflowMode="collapse"
            selectionMode="multiple"
            buttonLabelBehavior="hide"
            density="compact"
            isEmphasized
            selectedKeys={fontFilters}
            onSelectionChange={setFontFilters}>
            <Item key="bold" aria-label="Bold" textValue="bold">
              <TagBold />
            </Item>
            <Item key="italic" aria-label="Italic" textValue="italic">
              <TagItalic />
            </Item>
            <Item key="underline" aria-label="Underline" textValue="underline">
              <TagUnderline />
            </Item>
            <Item key="strike" aria-label="Strikethrough" textValue="strike">
              <TextStrikethrough />
            </Item>
          </ActionGroup>
          <ActionGroup
            aria-label="Text alignment"
            overflowMode="collapse"
            selectionMode="single"
            disallowEmptySelection
            buttonLabelBehavior="hide"
            density="compact"
            isEmphasized
            selectedKeys={alignFilters}
            onSelectionChange={setAlignFilters}>
            <Item key="left" textValue="left">
              <TextAlignLeft />
              <Text>Align Left</Text>
            </Item>
            <Item key="center" textValue="center">
              <TextAlignCenter />
              <Text>Align Center</Text>
            </Item>
            <Item key="right" textValue="right">
              <TextAlignRight />
              <Text>Align Right</Text>
            </Item>
            <Item key="justify" textValue="justify">
              <TextAlignJustify />
              <Text>Justify</Text>
            </Item>
          </ActionGroup>
          <ComboBox
            label="Font"
            labelPosition="side"
            labelAlign="end"
            defaultItems={fonts}
            selectedKey={fontFamily}
            onSelectionChange={setFontFamily}>
            {(item) => <ComboBoxItem key={item.cssValue}>{item.name}</ComboBoxItem>}
          </ComboBox>
        </Flex>
        <Tabs height="80%">
          <TabList>
            <TabItem>Edit</TabItem>
            <TabItem>Preview</TabItem>
          </TabList>
          <TabPanels>
            <TabItem>
              <TextArea width="100%" height="100%" value={editorValue} onChange={setEditorValue} aria-label="WYSIWYG simple text editor" />
            </TabItem>
            <TabItem>
              <Well width="100%" UNSAFE_style={cssFilterStyles}>{editorValue}</Well>
            </TabItem>
          </TabPanels>
        </Tabs>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={props.close}>
          Cancel
        </Button>
        <Button variant="cta" onPress={props.close} autoFocus>
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
  );
}
