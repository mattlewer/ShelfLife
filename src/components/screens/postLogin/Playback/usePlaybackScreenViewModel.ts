import {RouteProp, useRoute} from '@react-navigation/native';
import {AddItemsParams} from '../../../../navigation/postLoginNav/AddItemsStack';
type SelectLocationPostcodeRouteProp = RouteProp<AddItemsParams, 'Playback'>;

const usePlaybackScreenViewModel = () => {
  const {uri} = useRoute<SelectLocationPostcodeRouteProp>().params;
  return {
      uri,
  };
};

export default usePlaybackScreenViewModel;
