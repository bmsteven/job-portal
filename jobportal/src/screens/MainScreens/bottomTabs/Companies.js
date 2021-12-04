import React from "react"
import { View, SafeAreaView, FlatList } from "react-native"
import { PrimaryHeader } from "../../../components"
import { Search } from "../../../components/home"
import { SIZES, FONTS } from "../../../constants"
import { CompanyList } from "../../../components/companies"

const Companies = ({ navigation }) => {
  const emptyData = []

  const renderNullItem = () => null

  const ListFooterComponent = (
    <>
      {/* headline */}
      <View
        style={{
          paddingVertical: SIZES.padding,
        }}
      >
        {/* search component */}
        <Search navigation={navigation} />

        {/* companies list */}
        <CompanyList navigation={navigation} />
      </View>
    </>
  )

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={emptyData}
        renderItem={renderNullItem}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  )
}

export default Companies
