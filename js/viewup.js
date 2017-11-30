/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  MainView,
  Dimensions,
  ControlPanel,
  Main,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal
} from 'react-native';

var{width, height}=Dimensions.get('window');

import * as firebase from 'firebase';

import { StackNavigator } from 'react-navigation';
import Drawer from 'react-native-drawer';
import Swiper from 'react-native-swiper';
import { Container, Header, Content, Button, Fab, Icon, Left, Right, Body, Title} from 'native-base';

export default class kelola extends Component {  
  static navigationOptions = {
    header : null
  };

  constructor(props) {
    super(props);
    this.state = {
    user1: 'Useless placeholder' ,
    password : '',
    email : '',
    alert : false
  };
  }

  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };

  render () {
    const { navigate } = this.props.navigation;

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <View style={{width:width*0.75, height:height, backgroundColor:'white'}}>
            <ImageBackground style={styles.container}
            source={require('.././image/back.jpg')}>
              <Image style={{width:60, height:60, marginTop:60, justifyContent:'center', marginLeft:105}}
                source={require('.././image/user1.png')}
              />
              <Text style={{marginTop:10, textAlign:'center', fontWeight:'bold'}}>WELCOME</Text>

            </ImageBackground>

              <TouchableOpacity onPress={()=>navigate('Home')}>
                  <View style={styles.drawvi1}>
                  <Icon name='home' style={{marginLeft:20, marginTop:5, color:'#3498db'}}/>
                    <Text style={{textAlign:'center', marginTop:10, marginLeft:35, color:'black'}}>Beranda</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.setState({alert : true})}>
                  <View style={styles.drawvi1}>
                  <Icon name='person' style={{marginLeft:20, marginTop:6, color:'#3498db'}}/>
                    <Text style={{textAlign:'center', marginTop:12, marginLeft:35, color:'black'}}>Profile</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigate('Viewup')}>
                  <View style={styles.posisi}>
                    <Icon name='paper' style={{marginLeft:20, marginTop:5, color:'#3498db'}}/>
                    <Text style={{textAlign:'center', marginTop:10, fontWeight:'bold', marginLeft:35, color:'black'}}>Kelola Upacara</Text>
                  </View>
              </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigate('Viewsar')}>
                  <View style={styles.drawvi2}>
                    <Icon name='flame' style={{marginLeft:20, marginTop:10, color:'#3498db'}}/>
                    <Text style={{textAlign:'center', marginTop:15, marginLeft:39, color:'black'}}>Sarana Upacara</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({alert : true})}>
                  <View style={styles.drawvi}>
                    <Icon name='bookmarks' style={{marginLeft:20, marginTop:10, color:'#3498db'}}/>
                    <Text style={{textAlign:'center', marginTop:15, marginLeft:35, color:'black'}}>Daftar Peserta</Text>
                  </View>
              </TouchableOpacity>

              <View style={{height:1, width:width*0.75, backgroundColor:'gray', marginTop:-5}}>
              </View>

              <TouchableOpacity onPress={()=>navigate('Login')}>
                  <View style={{height:60, width:width/2, marginTop:5, flexDirection:'row'}}>
                    <Icon name='lock' style={{marginLeft:20, marginTop:10, color:'#3498db'}}/>
                    <Text style={{textAlign:'center', marginTop:15, marginLeft:35, color:'black'}}>Login</Text>
                  </View>
              </TouchableOpacity>

              <View style={{height:70, marginTop:10, width:width*0.75, backgroundColor:'#bdc3c7'}}>
                <Text style={{marginTop:5, textAlign:'center'}}>&copy; Balinese Culture Event</Text>
                <Text style={{textAlign:'center', fontStyle:'italic'}}>Make balinese ceremony to be easy</Text>
              </View>
          </View>
        }
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        >

          <Container style={{width:width, height:height}}>

            <Modal animationType = {"fade"} transparent   = {true} visible  = {this.state.alert} onRequestClose ={()=>this.setState({alert : false})}>
              <TouchableWithoutFeedback onPress={()=>this.setState({alert : false})}>
                <View style={{height : height, width : width, backgroundColor : 'rgba(51,44,43,0.5)'}}>
                  <TouchableWithoutFeedback>
                    <View style={{backgroundColor : 'white', height : height/5, width : width-100, borderRadius : 5, alignSelf : 'center', marginTop : height/2.5}}>
                      <View style={{height : 35, width : width-100, backgroundColor : '#2980b9', borderTopLeftRadius : 5, borderTopRightRadius : 5 }}>
                        <Text style={{color : 'white', fontSize : 18, textAlign : 'center', marginTop : 5}}>Culture Event Says</Text>
                      </View>
                      <Text style={{color : 'black', fontSize : 15, textAlign : 'center', marginTop:20}}>Login First</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

            <View style={{height:70, backgroundColor:'#3498db'}}>
              <View style={{flexDirection:'row', height:40, backgroundColor:'white', marginTop:10, width:340, marginLeft:10, borderRadius:5}}>
                <Button transparent onPress= {() =>this.openControlPanel()}>
                  <Icon name='menu' style={{marginTop:-4}}/>
                </Button>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="UPACARA"
                  style={{height: 40, width:250, borderWidth: 0, textAlign:"center", marginTop:0, marginLeft:0}}
                  onChangeText={(cariumum) => this.setState({cariumum})}
                  value={this.state.cariumum}
                />
                <Button transparent onPress= {() =>this.onPressButton}>
                  <Icon name='search' style={{marginLeft:10, marginTop:-3}}/>
                </Button>
              </View>
            </View>

            {/* Data Dami */}
            <Content>
              <View style={{flexDirection:'row'}}>
                <Image 
                  style={{marginTop:20, marginLeft:20, borderRadius:100, width:100, height:100}}
                  source={require('.././image/otonan.jpg')}
                />
                <View>
                  <Text style={{marginTop:10, marginLeft:20, color:'black', fontWeight:'bold', fontStyle:'italic', fontSize:20}}>Mebayuh</Text>
                  <Text style={{marginLeft:20}}>Upacara Massal</Text>
                  <Text style={{marginLeft:20}}>Buda kliwon, sungsang</Text>

                  <View style={{flexDirection:'row', marginTop:-20}}>
                    <TouchableOpacity onPress={()=>this.onPressButton}>
                      <View style={{height:40, width:70, backgroundColor:"#3498db", marginTop:30, marginLeft:20, borderRadius:10}}>
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Detail Upacara</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={{flexDirection:'row'}}>
                <Image 
                  style={{marginTop:20, marginLeft:20, borderRadius:100, width:100, height:100}}
                  source={require('.././image/otonan.jpg')}
                />
                <View>
                  <Text style={{marginTop:10, marginLeft:20, color:'black', fontWeight:'bold', fontStyle:'italic', fontSize:20}}>Mebayuh</Text>
                  <Text style={{marginLeft:20}}>Upacara Massal</Text>
                  <Text style={{marginLeft:20}}>Buda kliwon, sungsang</Text>

                  <View style={{flexDirection:'row', marginTop:-20}}>
                    <TouchableOpacity onPress={()=>this.onPressButton}>
                      <View style={{height:40, width:70, backgroundColor:"#3498db", marginTop:30, marginLeft:20, borderRadius:10}}>
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Detail Upacara</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={{flexDirection:'row'}}>
                <Image 
                  style={{marginTop:20, marginLeft:20, borderRadius:100, width:100, height:100}}
                  source={require('.././image/otonan.jpg')}
                />
                <View>
                  <Text style={{marginTop:10, marginLeft:20, color:'black', fontWeight:'bold', fontStyle:'italic', fontSize:20}}>Mebayuh</Text>
                  <Text style={{marginLeft:20}}>Upacara Massal</Text>
                  <Text style={{marginLeft:20}}>Buda kliwon, sungsang</Text>

                  <View style={{flexDirection:'row', marginTop:-20}}>
                    <TouchableOpacity onPress={()=>this.onPressButton}>
                      <View style={{height:40, width:70, backgroundColor:"#3498db", marginTop:30, marginLeft:20, borderRadius:10}}>
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Detail Upacara</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={{flexDirection:'row'}}>
                <Image 
                  style={{marginTop:20, marginLeft:20, borderRadius:100, width:100, height:100}}
                  source={require('.././image/otonan.jpg')}
                />
                <View>
                  <Text style={{marginTop:10, marginLeft:20, color:'black', fontWeight:'bold', fontStyle:'italic', fontSize:20}}>Mebayuh</Text>
                  <Text style={{marginLeft:20}}>Upacara Massal</Text>
                  <Text style={{marginLeft:20}}>Buda kliwon, sungsang</Text>

                  <View style={{flexDirection:'row', marginTop:-20}}>
                    <TouchableOpacity onPress={()=>this.onPressButton}>
                      <View style={{height:40, width:70, backgroundColor:"#3498db", marginTop:30, marginLeft:20, borderRadius:10}}>
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Detail Upacara</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={{flexDirection:'row'}}>
                <Image 
                  style={{marginTop:20, marginLeft:20, borderRadius:100, width:100, height:100}}
                  source={require('.././image/otonan.jpg')}
                />
                <View>
                  <Text style={{marginTop:10, marginLeft:20, color:'black', fontWeight:'bold', fontStyle:'italic', fontSize:20}}>Mebayuh</Text>
                  <Text style={{marginLeft:20}}>Upacara Massal</Text>
                  <Text style={{marginLeft:20}}>Buda kliwon, sungsang</Text>

                  <View style={{flexDirection:'row', marginTop:-20}}>
                    <TouchableOpacity onPress={()=>this.onPressButton}>
                      <View style={{height:40, width:70, backgroundColor:"#3498db", marginTop:30, marginLeft:20, borderRadius:10}}>
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Detail Upacara</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>



            </Content>

          {/*Batas data dummy*/}



          </Container>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
};

const styles = StyleSheet.create({
  wrapper: {
  },

  container:{
    width:width*0.75,
    height:200,

  },

  sliderimg:{
    width:width,
    height:height,
    flex:1,
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34495e',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    // fontWeight: 'bold',
    textAlign:'center',
    fontStyle:'italic',
  },
  posisi:{
    height:40, 
    width:300, 
    marginTop:20,
    flexDirection:'row',
    backgroundColor:'#bdc3c7'
    // marginLeft:10,
  },
  drawvi:{
    height:60, 
    width:width/2, 
    marginTop:-5,
    flexDirection:'row'
    // marginLeft:10,
  },
  drawvi1:{
    height:30, 
    width:width/2, 
    marginTop:15,
    flexDirection:'row'
    // marginLeft:10,
  },
  drawvi2:{
    height:60, 
    width:width/2, 
    marginTop:10,
    flexDirection:'row'
    // marginLeft:10,
  },
  drawim:{
    height:25, 
    width:25, 
    marginTop:10,
    marginLeft:15
  }, 
  drawtext:{
    textAlign:'center', 
    marginTop:15, 
    marginLeft:20, 
    fontWeight:'bold'
  }
});
