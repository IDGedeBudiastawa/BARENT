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

export default class sarana extends Component {  
  static navigationOptions = {
    header : null
  };

  constructor(props) {
    super(props);
    this.state = {
      user1: 'Useless placeholder' ,
      password : '',
      email : '',
      input : false
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

              <TouchableOpacity onPress={()=>navigate('Homelogin')}>
                  <View style={styles.drawvi1}>
                  <Icon name='home' style={{marginLeft:20, marginTop:5, color:'#34495e'}}/>
                    <Text style={{textAlign:'center', marginTop:10, marginLeft:35, color:'black'}}>Beranda</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigate('Epro')}>
                  <View style={styles.drawvi1}>
                  <Icon name='person' style={{marginLeft:20, marginTop:6, color:'#95a5a6'}}/>
                    <Text style={{textAlign:'center', marginTop:12, marginLeft:35, color:'black'}}>Profile</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigate('Kelola')}>
                  <View style={styles.drawvi1}>
                    <Icon name='paper' style={{marginLeft:20, marginTop:5, color:'green'}}/>
                    <Text style={{textAlign:'center', marginTop:10, marginLeft:35, color:'black'}}>Kelola Upacara</Text>
                  </View>
              </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigate('Sarana')}>
                  <View style={styles.posisi}>
                    <Icon name='flame' style={{marginLeft:20, marginTop:5, color:'#e74c3c'}}/>
                    <Text style={{textAlign:'center', marginTop:10, fontWeight:'bold', marginLeft:39, color:'black'}}>Sarana Upacara</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({alert : true})}>
                  <View style={styles.drawvi2}>
                    <Icon name='bookmarks' style={{marginLeft:20, marginTop:10, color:'#2980b9'}}/>
                    <Text style={{textAlign:'center', marginTop:15, marginLeft:35, color:'black'}}>Daftar Peserta</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigate('Home')}>
                  <View style={styles.drawvi}>
                    <Image style={styles.drawim}
                      source={require('.././image/login.png')}
                    />
                    <Text style={{textAlign:'center', marginTop:15, marginLeft:35, color:'black'}}>Log Out</Text>
                  </View>
              </TouchableOpacity>
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


            <Modal animationType = {"slide"} transparent   = {true} visible  = {this.state.input} onRequestClose ={()=>this.setState({input : false})}>
                <Content>
                <TouchableWithoutFeedback>
                  <View style={{height : height, width : width, backgroundColor : 'rgba(51,44,43,0.5)'}}>
                    <TouchableWithoutFeedback>
                      <View style={{backgroundColor : 'white', height : 450, width : width-50, borderRadius : 5, alignSelf : 'center', marginTop : 100}}>
                        <View style={{height : 35, width : width-50, backgroundColor : '#2980b9', borderTopLeftRadius : 5, borderTopRightRadius : 5 }}>
                          <Text style={{color : 'white', fontSize : 18, textAlign : 'center', marginTop : 5}}>Detail Sarana</Text>
                        </View>

                        <View style={{flexDirection:'row', marginTop:20}}>
                          <Text style={{marginTop:10, marginLeft : 10, color : 'black'}}>Nama Upacara   : </Text>
                          <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="ex : Otonan"
                            style={{borderColor: 'black', borderWidth : 1, borderRadius : 5, height: 40, width:185, textAlign:"center", marginTop:3, marginLeft:0}}
                            onChangeText={(namup) => this.setState({namup})}
                            value={this.state.namup}
                          />
                        </View>

                        <View style={{flexDirection:'row', marginTop:10}}>
                          <Text style={{marginTop:10, marginLeft : 10, color : 'black'}}>Hari Upacara       : </Text>
                          <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="ex : buda Kliwon"
                            style={{borderColor: 'black', borderWidth : 1, borderRadius : 5, height: 40, width : 185, borderColor: 'black', borderWidth : 1, textAlign:"center", marginTop:0, marginLeft:0}}
                            onChangeText={(dayup) => this.setState({dayup})}
                            value={this.state.dayup}
                          />
                        </View>

                        <View style={{flexDirection:'row', marginTop:10}}>
                          <Text style={{marginTop:10, marginLeft : 10, color : 'black'}}>Pawukon              : </Text>
                          <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="ex : Ukir"
                            style={{borderColor: 'black', borderWidth : 1, borderRadius : 5, height: 40, width : 185, borderColor: 'black', borderWidth : 1, textAlign:"center", marginTop:0, marginLeft:0}}
                            onChangeText={(wuku) => this.setState({wuku})}
                            value={this.state.wuku}
                          />
                        </View>

                        <View style={{flexDirection:'row', marginTop:10}}>
                          <Text style={{marginTop:10, marginLeft : 10, color : 'black'}}>Sasih                     : </Text>
                          <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="ex : Kaulu"
                            style={{borderColor: 'black', borderWidth : 1, borderRadius : 5, height: 40, width : 185, borderColor: 'black', borderWidth : 1, textAlign:"center", marginTop:0, marginLeft:0}}
                            onChangeText={(sasih) => this.setState({sasih})}
                            value={this.state.sasih}
                          />
                        </View>

                        <View style={{flexDirection:'row', marginTop:10}}>
                          <Text style={{marginTop:10, marginLeft : 10, color : 'black'}}>Sarana Upacara  : </Text>
                          <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="ex : peras ajuman pejati"
                            style={{borderColor: 'black', borderWidth : 1, borderRadius : 5, height: 40, width : 185, borderColor: 'black', borderWidth : 1, textAlign:"center", marginTop:0, marginLeft:0}}
                            onChangeText={(sarana) => this.setState({sarana})}
                            value={this.state.sarana}
                          />
                        </View>

                        <View style={{flexDirection:'row', marginTop:10}}>
                          <Text style={{marginTop:10, marginLeft : 10, color : 'black'}}>Detail Sarana       : </Text>
                          <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="ex : pejati dihaturkan di ... "
                            style={{borderColor: 'black', borderWidth : 1, borderRadius : 5, height: 40, width : 185, borderColor: 'black', borderWidth : 1, textAlign:"center", marginTop:0, marginLeft:0}}
                            onChangeText={(desa) => this.setState({desa})}
                            value={this.state.desa}
                          />
                        </View>

                        <Text style={{color : 'gray', fontSize : 15, marginTop:20}}>   *) Lengkapi lalu simpan</Text>
                        
                        <View style={{flexDirection:'row', marginTop:-5}}>
                          <TouchableOpacity onPress={()=>this.setState({ input : false })}>
                            <View style={{height:40, width:70, backgroundColor:"red", marginLeft:145, marginTop:20, borderRadius:5}}>
                              <Text style={{color:"white", textAlign:"center", marginTop:10}}>Batal</Text>
                            </View>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={()=>this.addup()}>
                            <View style={{height:40, width:70, backgroundColor:"#2980b9", marginLeft:5, marginTop:20, borderRadius:5}}>
                              <Text style={{color:"white", textAlign:"center", marginTop:10}}>Simpan</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        

                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </TouchableWithoutFeedback>
                </Content>
              </Modal>

            <View style={{height:70, backgroundColor:'#3498db'}}>
              <View style={{flexDirection:'row', height:40, backgroundColor:'white', marginTop:10, width:340, marginLeft:10, borderRadius:5}}>
                <Button transparent onPress= {() =>this.openControlPanel()}>
                  <Icon name='menu' style={{marginTop:-4}}/>
                </Button>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="SARANA UPACARA"
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
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Detail</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onPressButton}>
                      <View style={{height:40, width:70, backgroundColor:"red", marginTop:30, marginLeft:20, borderRadius:10}}>
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Delete</Text>
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
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Edit</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onPressButton}>
                      <View style={{height:40, width:70, backgroundColor:"red", marginTop:30, marginLeft:20, borderRadius:10}}>
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Delete</Text>
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
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Edit</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onPressButton}>
                      <View style={{height:40, width:70, backgroundColor:"red", marginTop:30, marginLeft:20, borderRadius:10}}>
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Delete</Text>
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
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Edit</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onPressButton}>
                      <View style={{height:40, width:70, backgroundColor:"red", marginTop:30, marginLeft:20, borderRadius:10}}>
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Delete</Text>
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
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Edit</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onPressButton}>
                      <View style={{height:40, width:70, backgroundColor:"red", marginTop:30, marginLeft:20, borderRadius:10}}>
                        <Text style={{color:"black", textAlign:"center", marginTop:10}}>Delete</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>



            </Content>

          {/*Batas data dummy*/}



              <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#3498db'}}
                position="bottomRight"
                onPress={() => this.setState({input : true})}>
                <Icon name="add" />
              </Fab>
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
