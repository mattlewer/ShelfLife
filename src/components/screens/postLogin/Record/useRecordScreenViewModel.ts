import {AddItemsParams} from '../../../../navigation/postLoginNav/AddItemsStack';
import {StackNavigationProp} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const useRecordScreenViewModel = () => {
  const navigation = useNavigation<StackNavigationProp<AddItemsParams>>();

  const onComplete = (fileUri: string) => {
      navigation.navigate('Playback', {uri: fileUri});
  };
  return {
    onComplete,
  };
};

export default useRecordScreenViewModel;
