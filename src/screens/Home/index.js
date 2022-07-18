import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import React, { Component } from 'react';
import colors from '../../constants/colors';
import { Avatar, Searchbar } from 'react-native-paper';
import imageStrings from '../../constants/imageStrings';
import CustomTextInput from '../../components/CustomTextInput';
import { FlatList } from 'react-native-gesture-handler';
import fonts from '../../constants/fonts';
import { moderateScale, scale } from 'react-native-size-matters';
import { Seemore } from '../../constants/strings';
import { styles } from './styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const data = [
    {
        title: 'Winner’s Circle',
        images: ['winner_circlr_img1', 'winner_circlr_img2', 'winner_circlr_img3', 'winner_circlr_img1', 'winner_circlr_img2', 'winner_circlr_img3'],
    },
    {
        title: 'Ending Soon',
        images: ['ending_soon_img_1', 'ending_soon_img_2', 'ending_soon_img_3', 'ending_soon_img_1', 'ending_soon_img_2', 'ending_soon_img_3'],
    },
    {
        title: 'Recently Added',
        images: [
            {
                title: 'Product Name', price: '100.00', image: 'ending_soon_img_2',
            }
            , {

                title: 'Product Name', price: '100.00', image: 'ending_soon_img_3',
            },
            {

                title: 'Product Name', price: '100.00', image: 'ending_soon_img_1',
            },
            { title: 'Product Name', price: '100.00', image: 'ending_soon_img_2', },
            { title: 'Product Name', price: '100.00', image: 'ending_soon_img_3' },

        ],
    },
    {
        title: 'Categories',
        images: [
            { title: 'Category', image: 'category1' },
            { title: 'Category', image: 'category2' },
            { title: 'Category', image: 'category3' },
        ],
    },
];
const win = Dimensions.get('window');
export default class HomeScreen extends Component {
    state = {
        searchQuery: '',
    };
    onChangeSearch = query => this.setState({ searchQuery: query });



    renderItem = ({ item }) => {
        const mainItem = item
        return <View style={{}}>
            <TouchableOpacity style={styles.listHeaderStyle}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.listTitleStyle}>{mainItem.title}</Text>
                </View>
                {mainItem.title !== 'Categories' && <>
                    <Text style={styles.listmoreText}>{Seemore}</Text>
                    {/* <Image source={{ uri: 'arrow_right' }} style={styles.rightArrow} /> */}
                    <FontAwesome5Icon name='arrow-right' size={12} color={colors.themeColor} style={styles.rightArrow} />
                </>
                }
            </TouchableOpacity>
            <FlatList
                showsHorizontalScrollIndicator={false}
                style={{ flex: 1, paddingHorizontal: 10 }}
                horizontal
                data={item.images}
                renderItem={({ item }) => {
                    const obj = item;
                    return (
                        <View style={{ marginRight: moderateScale(30), paddingVertical: moderateScale(10) }}>
                            {typeof obj !== 'object' ?
                                <View style={styles.listImageStyles}>
                                    <Image source={{ uri: obj }}
                                        style={{
                                            width: 145,
                                            height: 145,
                                        }} resizeMode='cover' borderRadius={20} />
                                </View> :
                                mainItem.title !== 'Recently Added' ?
                                    <View>
                                        <Image source={{ uri: obj.image }}
                                            style={{
                                                width: (win.width - 120 - 6) / 3,
                                                height: (win.width - 120 - 6) / 3,
                                            }} />
                                        <Text style={styles.listCatTitle}>{obj.title}</Text>
                                    </View>
                                    : <View style={[styles.listImageStyles, { backgroundColor: colors.white, height: moderateScale(200), width: moderateScale(150), borderRadius: 8, justifyContent: 'space-evenly' }]}>
                                        <Image source={{ uri: obj.image }}
                                            style={{
                                                width: 200,
                                                height: 200,
                                            }}
                                            resizeMode='contain'
                                        />
                                        <Text style={{ paddingBottom: 10 }}>{obj.title}</Text>
                                        <Text style={{}}>{obj.price}</Text>
                                    </View>
                            }
                        </View>
                    )
                }}
            />

        </View>
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View
                    style={styles.topContainer}>
                    <Searchbar
                        placeholder="Search RaffleUp"
                        icon={{ uri: imageStrings.searchIcon }}
                        style={styles.searchBar}
                        onChangeText={this.onChangeSearch}
                        value={this.state.searchQuery}
                    />
                    <Avatar.Image source={{ uri: imageStrings.avatar }} size={30} />
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this.renderItem}
                />

            </SafeAreaView>
        );
    }
}


