import React from 'react';
import AudioRecord from '../../../modules/AudioRecord';
import useRecordScreenViewModel from './useRecordScreenViewModel';

const RecordScreen = () => {
  const viewModel = useRecordScreenViewModel();
  return <AudioRecord maxLength={10000} onSuccess={viewModel.onComplete}/>;
};

export default RecordScreen;
