import React from 'react';
import {View, Text} from 'react-native';

const Welcome = ({code, name})=> {
  return (
      <View>
        <Text>
            Welcome to {code} - {name}
        </Text>
      </View>
  );
};

class ModuleInfo extends React.Component {
    render() {
        return (
            <View>
                <Text></Text>
                <Text>These are my modules this semester:</Text>
                <Welcome code="C346" name="Mobile App Development"/>
                <Welcome code="C382" name="IT Service Delivery"/>
                <Welcome code="C300" name="Project"/>
                <Welcome code="E003" name="Safety at Work Managing Risks"/>
                <Welcome code="H003" name="Wellness and Lifestyle Management"/>
            </View>
        )
    }
}

export default ModuleInfo;