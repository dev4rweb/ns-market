/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import store from './store/index'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('advantage-cards', require('./components/AdvantageCard').default);
Vue.component('reviews-carousel', require('./components/ReviewsCarousel').default);
Vue.component('search-dropdown', require('./components/SearchDropdown').default);
Vue.component('dropdown-city-input', require('./components/DropdownCityInput').default);
Vue.component('modal-login', require('./components/Modals/ModalLogin.vue').default);
Vue.component('modal-auth-form', require('./components/Modals/ModalAuthForm').default);
Vue.component('login-with-phone', require('./components/Modals/LoginWithPhone').default);
Vue.component('confirm-phone-form', require('./components/Modals/ConfirmPhoneFrom').default);
Vue.component('welcome-password-form', require('./components/Modals/WelcomePasswordForm').default);
Vue.component('register-login-form', require('./components/Modals/RegisterLoginForm').default);
Vue.component('register-login-form', require('./components/Modals/RegisterForm').default);
Vue.component('mentor-phone-form', require('./components/Modals/MentorPhoneForm').default);
Vue.component('login-by-id-form', require('./components/Modals/LoginByIdForm').default);
Vue.component('not-unique-phone-form', require('./components/Modals/NotUniquePhoneForm').default);
Vue.component('feedback-confirm', require('./components/Modals/FeedbackConfirm').default);
Vue.component('loader', require('./components/UI/Loader').default);
Vue.component('users', require('./components/Users/Users').default);
Vue.component('physicalPerson', require('./components/Users/PhysicalPerson').default);
Vue.component('uploadAvatar', require('./components/Users/physical-person/UploadAvatar').default);
Vue.component('toast', require('./components/UI/Toast.vue').default);
Vue.component('custom-radio', require('./components/UI/CustomRadio').default);
Vue.component('radio-box', require('./components/UI/RadioBox').default);
Vue.component('nav-user-data', require('./components/UI/NavUserData').default);
Vue.component('nav-catalog', require('./components/UI/NavCatalog').default);
Vue.component('change-status-btn', require('./components/UI/ChangeStatusBtn').default);
Vue.component('tooltip', require('./components/UI/Tooltip').default);
Vue.component('product-card', require('./components/UI/ProductCard').default);
Vue.component('user-data-tabs', require('./components/views/UserDataTabs').default);
Vue.component('catalog-page', require('./components/views/CatalogPage').default);
Vue.component('category-page', require('./components/views/CategoryPage').default);
Vue.component('user-data-panel', require('./components/views/UserDataPanel').default);
Vue.component('user-data-read-panel', require('./components/views/UserDataReadPanel').default);
Vue.component('user-status-panel', require('./components/views/UserStatusPanel').default);
Vue.component('user-status-modal', require('./components/Modals/UserStatusModal').default);
Vue.component('user-passport-panel', require('./components/views/UserPassportPanel').default);
Vue.component('user-passport-modal', require('./components/Modals/UserPassportModal').default);
Vue.component('user-modal-gallery', require('./components/Modals/UserModalGallery').default);
Vue.component('user-mentor-panel', require('./components/views/UserMentorPanel').default);
Vue.component('user-address-panel', require('./components/views/UserAddressPanel').default);
Vue.component('user-support-panel', require('./components/views/UserSupportPanel').default);
Vue.component('user-mentor-change-page', require('./components/views/UserMentorChangePage').default);
Vue.component('user-become-status', require('./components/views/UserBecomePartner').default);
Vue.component('user-choose-pay-page', require('./components/views/UserChoosePayPage').default);
Vue.component('user-invite-page', require('./components/views/UserInvitePage').default);
Vue.component('partner-congratulation-page', require('./components/views/PartnerCongratulationPage').default);
Vue.component('mentor-change-phone-form', require('./components/page-parts/mentor/MentorChangePhoneForm').default);
Vue.component('mentor-phone-founded-form', require('./components/page-parts/mentor/MentorPhoneFoundedForm').default);
Vue.component('mentor-phone-form-confirmation', require('./components/page-parts/mentor/MentorPhoneFormConfirmation').default);
Vue.component('change-password-form', require('./components/ChangePasswordForm').default);
Vue.component('update-with-phone', require('./components/Modals/UpdateWithPhone').default);
Vue.component('user-address-accordion', require('./components/page-parts/user-address/UserAddressAccordion').default);
Vue.component('user-address-accordion-item', require('./components/page-parts/user-address/UserAddressAccordionItem').default);
Vue.component('user-address-item', require('./components/page-parts/user-address/UserAddressItem').default);
Vue.component('add-address-form', require('./components/page-parts/user-address/AddAddressForm').default);
Vue.component('edit-address-form', require('./components/page-parts/user-address/EditAddressForm').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store
});
