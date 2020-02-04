import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    width: '100%',
    paddingTop: 20,
  },
  content:{
    flex: 1,
    marginTop: -5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: -20,
  },
  searchInput: {
    width: '80%',
    height: 30,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  searchFormContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  searchFormButton: {
    marginTop: 20
  },
  scrollView: {
    backgroundColor: '#FFF',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#FFF',
  },
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
    flexDirection: 'row'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export {styles}
