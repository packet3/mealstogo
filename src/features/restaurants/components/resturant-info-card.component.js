import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};

`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some resturant',
        icon,
        photos = [
            "https://www.sultanz.co.uk/uploads/2020/07/thumbnails/1593699375-1-550X550.jpg",

        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>

        </RestaurantCard>
    )
};

