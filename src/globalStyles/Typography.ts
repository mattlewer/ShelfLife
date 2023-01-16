import { StyleSheet } from "react-native";
import * as Colors from '../constants/colors';

const Typography = StyleSheet.create({
    HeaderFont:{
        fontSize: 36,
        color: Colors.Text
    },
    SubHeaderFont:{
        fontSize: 16,
        color: Colors.Text,
        fontWeight: '600',
    },
    BodyFont:{
        fontSize: 14,
        color: Colors.Text,
    },
    ListDateHeader:{
        fontSize: 14,
        color: Colors.Grey,
    },
    Error:{
        fontSize: 14,
        color: Colors.ErrorRed,
        fontWeight: '700',
    },
    Warning:{
        fontSize: 14,
        color: Colors.ErrorRed,
        fontWeight: '700',
    }

})