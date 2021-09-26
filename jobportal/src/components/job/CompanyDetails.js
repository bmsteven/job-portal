import React from 'react'
import {View, Text, TouchableOpacity} from "react-native"
import {Template} from "./"
import {COLORS, SIZES, FONTS} from "../../constants"

const CompanyDetails = ({company}) => {
    const {name, location, website, bio, title, email} = company
    return (
        <Template>
            <View>
                {name && <Card title="Name" label={name}/>}
                {title && <Card title="Title" label={title}/>}
                {location && <Card title="Location" label={location}/>}
                {bio && <Card title="About" label={bio}/>}
                {email && <Card title="Email" label={email} isEmail={true}/>}
                {website && <Card title="Website" label={website} isUrl={true}/>}
            </View>
        </Template>
    )
}

export default CompanyDetails

const Card = ({title, label, isEmail, isUrl}) => {
    return <View style={{
        marginBottom: SIZES.padding
    }}>
        <Text style={{
            ...FONTS.h3,
            marginBottom: SIZES.radius / 2
        }}>{title}</Text>
        {isEmail || isUrl ? <TouchableOpacity>     
        <Text style={{
            ...FONTS.body3,
            color: COLORS.primary
        }}>{label}</Text>
        </TouchableOpacity> :<Text style={{
            ...FONTS.body3,
        }}>{label}</Text>}
        
    </View>
}
