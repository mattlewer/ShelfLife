import {View, Text} from 'react-native';
import useAppStartupViewModel from './services/viewModels/useAppStartupViewModel';
import * as Colors from './constants/colors';

interface AppStartupProps {
  children: React.ReactNode;
}
const AppStartup = (props: AppStartupProps) => {
  const viewModel = useAppStartupViewModel();
  return (
    <>
      {viewModel.checkedAuth === false ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.Primary}}>
            <Text>Welcome</Text>
        </View>
      ) : (
        props.children
      )}
    </>
  );
};

export default AppStartup;
