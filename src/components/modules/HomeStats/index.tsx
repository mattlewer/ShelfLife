import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeStatCard from '../HomeStatCard';
import {localise} from '../../../services/lang/lang';

interface HomeStatsProps {
  currentItems: number;
  discardedItems: number;
  moneyWasted: number;
}
const HomeStats = (props: HomeStatsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <HomeStatCard
          title={localise('CURRENT_ITEMS')}
          content={props.currentItems.toString()}
        />
        <HomeStatCard
          title={localise('ITEMS_DISCARDED')}
          content={props.discardedItems.toString()}
        />
      </View>
      <HomeStatCard
        title={localise('MONEY_WASTED')}
        content={'£' + props.moneyWasted.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftSide: {
    height: 150,
    flex: 1,
  },
});

export default HomeStats;
