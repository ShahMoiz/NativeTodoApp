import React, {Component} from 'react'
import { Form,List, Content,Fab,SwipeRow, Card, CardItem,CheckBox ,Text, Icon,Separator, Right,Input,Item,Label, Button, ListItem, Body, Switch, Left  } from 'native-base';
import {ListView, View} from 'react-native'
var arr = [10,10,10,10,10,10,10,10,10]
export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          check1: false,
        };
      }
    //   deleteRow(secId, rowId, rowMap) {
    //     rowMap[`${secId}${rowId}`].props.closeRow();
    //     const newData = [...this.state.listViewData];
    //     newData.splice(rowId, 1);
    //     this.setState({ listViewData: newData });
    //   }
    render(){
        // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Content >
                <Card>
                    <Form>
                        <CardItem>
                        <Item>
                        <Label onPress={() => alert("Record Voice")}>
                          <Icon name="mic"/>
                        </Label>
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
                 arr.map((a, index) => {
                     return <Content key={index}>
                   
                   <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button transparent onPress={() =>this.setState({check1: !this.state.check1})}>
                <CheckBox checked={this.state.check1} color="green"/>
              </Button>
            }
            body={
              <View style={{marginLeft: 25}}>
                <Text>Complete Home Hork</Text>
                <Text note><Icon style={{fontSize: 16}} name="alarm" /> Tomorrow 6:30 AM</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
                   </Content>
                   })
                }
            <ListItem itemHeader>
                <Text>Other task</Text>
                </ListItem>
                {/* <List
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
          /> */}
            </Content>

        )
    }
}