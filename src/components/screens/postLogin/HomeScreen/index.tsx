import React from 'react';
import useHomeScreenViewModel from '../../../../services/viewModels/postLogin/useHomeScreenViewModel';
import {StyleSheet, Text, View} from 'react-native';
import {Typography} from '../../../../globalStyles/Typography';
import {ScrollView} from 'react-native-gesture-handler';
import {localise} from '../../../../services/lang/lang';
import * as Colors from '../../../../constants/colors';
import HomeStats from '../../../modules/HomeStats';
import ProductListRow from '../../../modules/ProductListRow';


const HomeScreen = () => {
  const viewModel = useHomeScreenViewModel();

  return (
    <View style={styles.pageContainer}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={Typography.HeaderFont}>Hi, Matt!</Text>
          <Text style={Typography.BodyFont}>
            You have x items expiring today
          </Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={Typography.SubHeaderFont}>{localise('STATISTICS')}</Text>
          <HomeStats
            currentItems={viewModel.currentItems}
            discardedItems={viewModel.discardedItems}
            moneyWasted={viewModel.moneyWasted}
          />
        </View>
        <View
          style={styles.listContainerToday}>
          <Text style={[Typography.SubHeaderFont, styles.sectionHeaderList]}>
            {localise('USE_TODAY')}
          </Text>
          <ProductListRow
            products={viewModel.products[0].items}
            useBy={viewModel.products[0].useBy}
          />
        </View>
        <View
          style={styles.listContainerTomorrow}>
          <Text style={[Typography.SubHeaderFont, styles.sectionHeaderList]}>
            {localise('USE_TOMORROW')}
          </Text>
          <ProductListRow
            products={viewModel.products[1].items}
            useBy={viewModel.products[1].useBy}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  statContainer: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  listContainerToday: {
    backgroundColor: '#FFE0E0',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingTop: 10,
  },
  listContainerTomorrow: {
    backgroundColor: '#FFE3B9',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingTop: 10,
    marginTop: 10,
  },
  sectionHeaderList: {
    paddingHorizontal: 20,
  },
});
export default HomeScreen;
