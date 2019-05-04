
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image,TouchableOpacity , View, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';


export default class AllItems extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      currentItem: {
        name : "Brand One",
        serial: "A1C021222",
        image: require("./../assets/images/watchOne.jpg"),
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
        price: "$165.98",
        oldPrice: "$335.00"
      },
      items:[
        {
          name : "Brand One",
          serial: "A1C021222",
          image: require("./../assets/images/watchOne.jpg"),
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
          price: "$165.98",
          oldPrice: "$335.00"
        },
        {
          name : "Brand Two",
          serial: "A1C021222",
          image: require("./../assets/images/watchTwo.jpg"),
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
          price: "$232.98",
          oldPrice: "$301.00"
        },
        {
          name : "Brand Three",
          serial: "A1C021222",
          image: require("./../assets/images/watchThree.png"),
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
          price: "$205.98",
          oldPrice: "$245.00"
        },
      ],
    }
  }

  render() {
    return(
      <View style={styles.container}>

        <View style={styles.header}>
          <Icon name="bold" size={35}/>
          <Icon name="shopping-cart" size={35}/>
        </View>

        <View style={styles.scrollWrap}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data = {this.state.items}
            onScroll={(event)=>{
              this.setState({currentItem: event});
            }}
            renderItem={({item,index}) => {
              return(
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={()=>{
                    this.props.navigation.navigate("ScreenSelectedItem")
                  }}
                >
                  <View style={styles.watchImageWrap}>
                    <Image style={styles.watchImage}
                      source={ item.image }
                    />
                  </View>
                  <View style={styles.itemNameWrap}>
                    <View style={styles.itemNameTextWrap}>
                      <Text style={styles.itemName}> {item.name} </Text>
                      <Text style={styles.itemSerial}> {item.serial}</Text>
                    </View>
                    <Image style={styles.itemPriceImage} source={require("./../assets/images/priceImage.png")}/>
                  </View>
                  <View style={styles.itemDescriptionWrap}>
                    <Text style={styles.itemDescription}>
                      {item.description}
                    </Text>
                  </View>
                  <View style={styles.itemPriceWrap}>
                    <Text style={styles.itemNewPrice}> {item.price} </Text>
                    <Text style={styles.itemOldPrice}> {item.oldPrice} </Text>
                  </View>
                </TouchableOpacity>
              )
            }}
            sliderWidth= {500}
            itemWidth={325}
          />
        </View>

      </View>
    );
  }

}



const styles = StyleSheet.create({

  container: {
    flex: 1,

    paddingTop: 20,
    backgroundColor:"#FFF"
  },

  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 45,
    paddingRight: 45,
    paddingTop:45,
    paddingBottom: 0,
  },

  itemContainer:{
    padding: 0,
  },
  scrollWrap:{
    alignItems:'center',
  },
  watchImageWrap: {
    justifyContent:"center",
    alignItems:"center"
  },
  watchImage: {
    width: "65%",
    height: "65%",
  },
  itemNameWrap:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    fontSize: 25,
    paddingLeft: 15,
  },
  itemSerial: {
    fontSize: 12,
    color: "#959595",
    paddingLeft: 17,
  },
  itemPriceImage: {
    width : 75,
    height: 75
  },

  itemDescription:{
    color: "#959595",
    paddingLeft: 20,
    paddingRight: 15,
    paddingBottom: 15,
  },

  itemPriceWrap: {
    flexDirection: "row",
    justifyContent:"space-between",
    paddingBottom: 20
  },
  itemNewPrice: {
    fontSize: 25,
    fontWeight: "500",
    color: "#AC674C",
    paddingLeft: 15,
  },
  itemOldPrice: {
    fontSize: 25,
    fontWeight: "500",
    textDecorationLine: "line-through",
    color: "#E3C3BA",
    paddingRight: 15
  }


});
