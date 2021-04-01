export default {
    loggedIn: state => !!state.currentUser,
    currentUser: state => state.currentUser,
    isLoading: state => state.loading,
};
