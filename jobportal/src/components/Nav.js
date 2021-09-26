import React from 'react'
import {View, Text, FlatList, TouchableHighlight} from "react-native"
import {COLORS, SIZES, FONTS} from "../constants"

const Nav = ({navItems, setSelected, selected}) => {
    return (
        <View>
            {navItems?.length > 0 && <FlatList
                data={navItems}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index }) => <NavItem item={item} selected={selected} setSelected={setSelected} index={index +1} length={navItems?.length} />}
            />}
        </View>
    )
}

export default Nav

const NavItem = ({item, selected, setSelected, index, length}) => {
    const {label} = item
    let lastItem = index === length
    firstItem = index === 1
    return <TouchableHighlight activeOpacity={0.4}
                underlayColor="transparent"
                onPress={() => {
                    setSelected(label)
                }}>
        <View style={{
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding / 1.1,
            marginLeft: firstItem ? SIZES.padding : 0,
            marginRight: lastItem ? SIZES.padding : 0,
            borderBottomWidth: selected === label ? 3 : 0,
            borderColor: COLORS.primary,
            backgroundColor: selected === label ? COLORS.transparentBlack1 : "transparent"
        }}>
            <Text style={{
                ...FONTS.body3
            }}>{label}</Text>
        </View>
    </TouchableHighlight>
}
