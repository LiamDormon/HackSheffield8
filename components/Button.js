import React from 'react';
import { Text, Pressable } from 'react-native';
import { deepMerge } from '../utils';

const defaults = {
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
}

export default function Button({onPress, title = 'Save', style = {} }) {
    const styles = deepMerge({}, defaults, style);
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}
