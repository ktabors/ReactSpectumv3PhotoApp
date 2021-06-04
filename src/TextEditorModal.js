import { ActionGroup, Button, ButtonGroup, Content, Dialog, Divider, Heading, Item, Text, TextArea, TextField, Well} from "@adobe/react-spectrum";
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

export function TextEditorModal(props) {
  let [editorValue, setEditorValue] = useState('Why is focus hosed');
  let [fontFilters, setFontFilters] = useState(new Set([]));
  let [alignFilters, setAlignFilters] = useState(new Set(['left']));

  let cssFilterStyles = {
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
