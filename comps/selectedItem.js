
import React, {Component} from 'react';
import {Platform, StyleSheet, Text,ImageBackground, Image,TouchableOpacity , View, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class SelectedItem extends Component<Props> {
  constructor(props){
    super(props);

  }

  render() {
    let iconSize = 15;

    return (
      <View style={styles.container}>
        <View style={ styles.backWrap }>
          <TouchableOpacity style={styles.iconWrap}
            onPress={ () => { this.props.navigation.goBack() }}
          >
            <Icon name="chevron-left" size={iconSize}/>
          </TouchableOpacity>
        </View>

        <View style={ styles.contentWrap }>

          <View style={styles.watchImageWrap}>
            <Image
              style= {styles.watchImage}
              source={require("../assets/images/priceImage.png")}
            />
          </View>

          <View style={styles.priceWrap}>
            <Text style={styles.price}> $165.98</Text>
            <Image style={styles.priceImage} source={require("../assets/images/priceImage.png")}/>
          </View>

          <View style={styles.watchDescWrap}>
            <Text style={styles.watchDescLabel}>Brand Type</Text>
            <Text style={styles.watchDescType}>Strap</Text>
          </View>
          <View style={styles.watchDescWrap}>
            <Text style={styles.watchDescLabel}>Brand Width</Text>
            <Text style={styles.watchDescType}>18 mm</Text>
          </View>
          <View style={styles.watchDescWrap}>
            <Text style={styles.watchDescLabel}>Bezel Material</Text>
            <Text style={styles.watchDescType}>Stainless Steel</Text>
          </View>


          <View style={styles.watchTextWrap}>
            <Text style={styles.watchText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text style={styles.watchText}>{"\n"}2 Year WatchCenter Warranty and keep receipt </Text>
          </View>

          <View style={styles.addToBagWrap}>
            <TouchableOpacity
              style={styles.addToBagButton}
            >
              <Text style={styles.addToBagButtonText}> ADD TO BAG </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }

}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#FFF',
  },
  backWrap: {
    flex: 0.1,
    //justifyContent:"center",
    alignItems: "flex-end",
    paddingRight: 5
  },
  iconWrap: {
    flex: 0.2,
    justifyContent:"center",
    //alignItems:"flex-end"

  },


  contentWrap: {
    flex: 0.9,
  },

  watchImageWrap: {
    flex:0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  watchImage: {
    width: "100%",
    height: "100%",
  },
  watchNameWrap: {
    flex: 0.5,
    justifyContent: "center",
    paddingLeft : 25
    //alignItems: "center"
  },
  watchNameText: {
    fontSize: 30,
    color : "#FFF"
  },
  watchSloganText: {
    fontSize: 20,
    color : "#FFF"
  },

  priceWrap: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center"
  },
  price: {
    fontSize: 25,
    color: "#A9683C",
    fontWeight: "700"
  },
  priceImage: {
    width : 75,
    height: 75
  },

  watchDescWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    borderBottomWidth:3,
    borderBottomColor: "#F5F5F5"
  },
  watchDescType: {
    color : '#C1C1C1'
  },

  watchTextWrap: {
    flex: 0.2,
    justifyContent: "center",

    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  watchText: {
    color : '#C1C1C1',
  },

  addToBagWrap: {
    flex: 0.2,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  addToBagButton: {
    flex:0.9,
    padding: 15,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: "#B37358",
    borderRadius: 7
  },
  addToBagButtonText: {
    color: "#FFF"
  }

});


//borderWidth: 4,borderColor: "#000"
