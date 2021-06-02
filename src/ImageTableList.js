// import ExifReader from "exifreader";
import { ActionButton, Image } from "@adobe/react-spectrum";
import { Cell, Column, Row, TableBody, TableHeader, Table } from '@react-spectrum/table'
import Edit from '@spectrum-icons/workflow/Edit';
import { useEffect, useState } from "react";

const ImageTableList = (props) => {
  let [tableItems, setTableItems] = useState([]);
  let columns = [
    {name: 'Image Preview', key: 'url', width: 150},
    {name: 'Filename', key: 'filename'},
    {name: 'Width', key: 'width', width: 100},
    {name: 'Height', key: 'height', width: 100},
    {name: 'Action', key: 'action', width: 100}
  ];

  useEffect(() => {
    setTimeout(() => {
      setTableItems(props.items);
    }, 2000);
  });

  let editImage = (imageId) => {
    let item = props.items.find(anItem => imageId === anItem.id);
    props.setSelectedImage(item);
  };

  return (
    <Table
      aria-label="List of images to apply filters to"
      width="100%"
      height="100%"
      density="spacious">
      <TableHeader columns={columns}>
        {column => <Column width={column.width}>{column.name}</Column>}
      </TableHeader>
      <TableBody items={tableItems} loadingState="loading">
        {item =>
          (<Row key={item.id}>
            {key => {
              if (key === 'url') {
                return (
                  <Cell>
                    <Image
                      src={item[key]}
                      alt={item['alt']} />
                  </Cell>);
              } else if (key === 'action') {
                return (
                  <Cell>
                    <ActionButton isQuiet onClick={() => editImage(item['id'])}>
                      <Edit />
                    </ActionButton>
                  </Cell>);
              } else {
                return (<Cell>{item[key]}</Cell>);
              }
            }}
          </Row>)
        }
      </TableBody>
    </Table>
  );
};

export { ImageTableList };
