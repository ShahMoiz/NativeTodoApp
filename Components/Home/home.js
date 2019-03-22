import React, {Component} from 'react'
import { Form,List, Content, Card, CardItem,CheckBox ,Text, Icon,Separator, Right,Input,Item,Label, Button, ListItem, Body, Switch, Left  } from 'native-base';
import {ListView} from 'react-native'
var arr = [10,10,10]
const datas = [
    'Simon Mignolet',
    'Nathaniel Clyne',
    'Dejan Lovren',
    'Mama Sakho',
    'Alberto Moreno',
    'Emre Can',
    'Joe Allen',
    'Phil Coutinho',
  ];
export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          basic: true,
          listViewData: datas,
        };
      }
      deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
      }
    render(){
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Content>
                <Card>
                    <Form>
                        <CardItem>
                        <Item>
                        <Input placeholder="Add Todo Quick"/>
                        <Button transparent>
                        <Icon name='arrow-forward' />
                        </Button>
                        </Item>
                        </CardItem>
                    </Form>
                </Card>


                <ListItem itemHeader>
                <Text>Top 3 Task</Text>
                </ListItem>
                {
                 arr.map((a) => {
                     return <Content><ListItem icon>
                     <Left>
                     <CheckBox checked={false} color="green"/>
                     </Left>
                     <Body>
                       <Text>Complete Home Hork</Text>
                       <Text note><Icon style={{fontSize: 16}} name="alarm" /> Tomorrow 6:30 AM</Text>
                     </Body>
                     <Right>
                     <Text note>3:43 pm</Text>
                     </Right>
                   </ListItem>
                   <ListItem itemHeader>
                   </ListItem>
                   </Content>
                   })
                }
            
            <ListItem itemHeader>
                <Text>Other task</Text>
                </ListItem>
                <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
            </Content>

        )
    }
}