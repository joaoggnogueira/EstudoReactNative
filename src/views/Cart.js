import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {StateContext} from '../state';
import {colors} from '../colors';
import OrderItem from '../components/OrderItem';
import Dialog from '../components/Dialog';
import EditOrderDialog from '../components/EditOrderDialog';
import FabButton from '../components/FabButton';

function priceToString(price) {
  if (price.toString().indexOf('.') === -1) {
    return price + '.00';
  }
  return price.toString().padEnd(4, 0);
}

export default props => {
  const [ItemSelected, setItemSelected] = useState(null);
  return (
    <StateContext.Consumer>
      {([state]) => {
        const total = state.cart.reduce(
          (acc, item) => acc + item.quantity * item.product.price,
          0,
        );

        const onPress = function (item) {
          setItemSelected(item);
        };

        const closeEdit = function () {
          setItemSelected(null);
        };

        return (
          <>
            <View style={styles.container}>
              <View style={[styles.header_container, styles.row]}>
                <Text style={styles.textWhite}>Carrinho</Text>
                <FabButton
                  onPress={() => props.navigation.goBack()}
                  icon={faTimes}
                  iconColor={'white'}
                />
              </View>
              <View style={[styles.price_container, styles.row]}>
                <Text style={styles.text}>
                  Preço total: {priceToString(total)} R$
                </Text>
              </View>
              <FlatList
                contentContainerStyle={styles.scrollViewContent}
                style={styles.scrollView}
                data={state.cart}
                keyExtractor={i => `${i.product.id}`}
                renderItem={({item}) => (
                  <OrderItem onPress={onPress} item={item} />
                )}
              />
            </View>
            {ItemSelected ? (
              <Dialog onClose={closeEdit}>
                <EditOrderDialog item={ItemSelected} onClose={closeEdit} />
              </Dialog>
            ) : null}
          </>
        );
      }}
    </StateContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  navbutton: {
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    paddingTop: 24,
    paddingBottom: 64,
    paddingLeft: 24,
    paddingRight: 24,
  },
  header_container: {
    marginBottom: 2,
    backgroundColor: colors.primary,
  },
  navbutton_touchableHighlight: {
    borderRadius: 32,
  },
  price_container: {
    backgroundColor: '#EEE',
  },
  row: {
    paddingLeft: 24,
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
  textWhite: {
    color: 'white',
  },
});
