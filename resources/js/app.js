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
Vue.component('invite-component', require('./components/InviteComponent').default);
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
Vue.component('modal-success-message', require('./components/Modals/ModalSuccessMessage').default);
Vue.component('user-invite-modal', require('./components/Modals/UserInviteModal').default);
Vue.component('mentor-list-modal', require('./components/Modals/MentorsListModal').default);
Vue.component('found-old-basket', require('./components/Modals/FoundOldBasket').default);
Vue.component('welcome-registered-modal', require('./components/Modals/WelcomeRegisteredModal').default);
Vue.component('loader', require('./components/UI/Loader').default);
Vue.component('users', require('./components/Users/Users').default);
Vue.component('physicalPerson', require('./components/Users/PhysicalPerson').default);
Vue.component('uploadAvatar', require('./components/Users/physical-person/UploadAvatar').default);
Vue.component('toast', require('./components/UI/Toast.vue').default);
Vue.component('custom-radio', require('./components/UI/CustomRadio').default);
Vue.component('radio-box', require('./components/UI/RadioBox').default);
Vue.component('nav-product-data', require('./components/UI/NavProductData').default);
Vue.component('nav-catalog', require('./components/UI/NavCatalog').default);
Vue.component('change-status-btn', require('./components/UI/ChangeStatusBtn').default);
Vue.component('tooltip', require('./components/UI/Tooltip').default);
Vue.component('product-card', require('./components/UI/ProductCard').default);
Vue.component('program-card', require('./components/UI/ProgramCard').default);
Vue.component('product-list-item', require('./components/UI/ProductListItem').default);
Vue.component('breadcrumb', require('./components/UI/Breadcrumb').default);
Vue.component('back-btn', require('./components/UI/BackBtn').default);
Vue.component('basket-btn', require('./components/UI/BasketBtn').default);
Vue.component('program-components', require('./components/UI/ProgramComponents').default);
Vue.component('nav-order', require('./components/UI/NavOrder').default);
Vue.component('dpd-list', require('./components/UI/DPDList').default);
Vue.component('user-address-list', require('./components/UI/UserAddressList').default);
Vue.component('order-sum-info', require('./components/UI/OrderSumInfo').default);
Vue.component('dear-friends-banner', require('./components/UI/DearFriendsBanner').default);
Vue.component('logout-btn', require('./components/UI/LogoutBtn').default);
Vue.component('recipient-address', require('./components/UI/RecipientAddress').default);
Vue.component('recipient-info', require('./components/UI/RecipientInfo').default);
Vue.component('order-data-table', require('./components/UI/tables/OrderDataTable').default);
Vue.component('order-data-table-item', require('./components/UI/tables/OrderDataTableItem').default);
Vue.component('expiration-date-table', require('./components/UI/tables/ExpirationDateTable').default);
Vue.component('expiration-date-table-item', require('./components/UI/tables/ExpirationDateTableItem').default);
Vue.component('discount-order-table', require('./components/UI/tables/DiscountOrderTable').default);
Vue.component('my-orders-table', require('./components/UI/tables/MyOrdersTable').default);
Vue.component('my-orders-table-item', require('./components/UI/tables/MyOrdersTableItem').default);
Vue.component('delivery-way-table', require('./components/UI/tables/DeliveryWayTable').default);
Vue.component('delivery-way-table-item', require('./components/UI/tables/DeliveryWayTableItem').default);
Vue.component('category-products-table', require('./components/UI/tables/CategoryProductsTable').default);
Vue.component('aroma-groups-table', require('./components/UI/tables/AromaGroupsTable').default);
Vue.component('aroma-groups-table-item', require('./components/UI/tables/AromaGroupsTableItem').default);
Vue.component('bm_report-table', require('./components/UI/tables/BMReportTable').default);
Vue.component('bm_report-table-item', require('./components/UI/tables/BMReportTableItem').default);
Vue.component('reserve-report-table', require('./components/UI/tables/ReserveReportTable').default);
Vue.component('reserve-report-table-item', require('./components/UI/tables/ReserveReportTableItem').default);
Vue.component('user-data-tabs', require('./components/views/UserDataTabs').default);
Vue.component('catalog-page', require('./components/views/CatalogPage').default);
Vue.component('category-page', require('./components/views/CategoryPage').default);
Vue.component('product-programs-page', require('./components/views/ProductProgramsPage').default);
Vue.component('product-list-page', require('./components/views/ProductListPage').default);
Vue.component('product-list-page-fav', require('./components/views/ProductListPageFav').default);
Vue.component('user-data-panel', require('./components/views/UserDataPanel').default);
Vue.component('user-data-read-panel', require('./components/views/UserDataReadPanel').default);
Vue.component('user-status-panel', require('./components/views/UserStatusPanel').default);
Vue.component('user-panel-page', require('./components/views/UserPanelPage').default);
Vue.component('user-status-modal', require('./components/Modals/UserStatusModal').default);
Vue.component('user-passport-panel', require('./components/views/UserPassportPanel').default);
Vue.component('user-passport-modal', require('./components/Modals/UserPassportModal').default);
Vue.component('user-modal-gallery', require('./components/Modals/UserModalGallery').default);
Vue.component('user-mentor-panel', require('./components/views/UserMentorPanel').default);
Vue.component('user-address-panel', require('./components/views/UserAddressPanel').default);
Vue.component('user-support-panel', require('./components/views/UserSupportPanel').default);
Vue.component('user-orders-panel', require('./components/views/UserOrdersPanel').default);
Vue.component('basket-page', require('./components/views/BasketPage').default);
Vue.component('order-config-page', require('./components/views/OrderConfigPage').default);
Vue.component('order-delivery-page', require('./components/views/OrderDeliveryPage').default);
Vue.component('order-payment-page', require('./components/views/OrderPaymentPage').default);
Vue.component('user-mentor-change-page', require('./components/views/UserMentorChangePage').default);
Vue.component('user-become-status', require('./components/views/UserBecomePartner').default);
Vue.component('user-choose-pay-page', require('./components/views/UserChoosePayPage').default);
Vue.component('user-invite-page', require('./components/views/UserInvitePage').default);
Vue.component('product-detail-page', require('./components/views/ProductDetailPage').default);
Vue.component('product-aroma-detail-page', require('./components/views/aroma/ProductAromaDetailPage').default);
Vue.component('product-detail-reviews-page', require('./components/views/ProductDetailReviewsPage').default);
Vue.component('product-detail-complectations-page', require('./components/views/ProductDetailComplectations').default);
Vue.component('partner-congratulation-page', require('./components/views/PartnerCongratulationPage').default);
Vue.component('mentor-change-phone-form', require('./components/page-parts/mentor/MentorChangePhoneForm').default);
Vue.component('mentor-phone-founded-form', require('./components/page-parts/mentor/MentorPhoneFoundedForm').default);
Vue.component('mentor-phone-form-confirmation', require('./components/page-parts/mentor/MentorPhoneFormConfirmation').default);
Vue.component('change-password-form', require('./components/ChangePasswordForm').default);
Vue.component('product-detail-main-info', require('./components/ProductDetailMainInfo').default);
Vue.component('update-with-phone', require('./components/Modals/UpdateWithPhone').default);
Vue.component('user-address-accordion', require('./components/page-parts/user-address/UserAddressAccordion').default);
Vue.component('user-address-accordion-item', require('./components/page-parts/user-address/UserAddressAccordionItem').default);
Vue.component('user-address-item', require('./components/page-parts/user-address/UserAddressItem').default);
Vue.component('add-address-form', require('./components/page-parts/user-address/AddAddressForm').default);
Vue.component('edit-address-form', require('./components/page-parts/user-address/EditAddressForm').default);
Vue.component('product-description', require('./components/page-parts/detail-product/ProductDescription').default);
Vue.component('product-reviews', require('./components/page-parts/detail-product/ProductReviews').default);
Vue.component('product-kits', require('./components/page-parts/detail-product/ProductKits').default);
Vue.component('general-order-info', require('./components/page-parts/order-payment/GeneralOrderInfo').default);
Vue.component('account-payment-type', require('./components/page-parts/order-payment/AccountPaymentType').default);
Vue.component('payment-way', require('./components/page-parts/order-payment/PaymentWay').default);
Vue.component('aroma-vis-header', require('./components/UI/aroma-vis/AromaVisHeader').default);
Vue.component('aroma-sidebar', require('./components/UI/aroma-vis/AromaSidebar').default);
Vue.component('aroma-product-card', require('./components/UI/aroma-vis/AromaProductCard').default);
Vue.component('complementary-aromas', require('./components/UI/aroma-vis/ComplementaryAromas').default);
Vue.component('antagonist-aromas', require('./components/UI/aroma-vis/AntagonistAromas').default);
Vue.component('pair-aromas', require('./components/UI/aroma-vis/PairAromas').default);
Vue.component('catalog-products-header', require('./components/page-parts/headers/CatalogProductsHeader').default);
Vue.component('sex-filter', require('./components/UI/aroma-vis/filters/SexFilter').default);
Vue.component('color-filter', require('./components/UI/aroma-vis/filters/ColorFilter').default);
Vue.component('daily-filter', require('./components/UI/aroma-vis/filters/DailyFilter').default);
Vue.component('smell-filter', require('./components/UI/aroma-vis/filters/SmellFilter').default);
Vue.component('spirit-filter', require('./components/UI/aroma-vis/filters/SpiritFilter').default);
Vue.component('quick-filter', require('./components/UI/aroma-vis/filters/QuickFilter').default);
Vue.component('text-filter-result', require('./components/UI/aroma-vis/filters/TextFilterResult').default);
Vue.component('category-oil', require('./components/UI/aroma-vis/CategoryOil').default);
Vue.component('pyramid', require('./components/UI/aroma-vis/Pyramid').default);
Vue.component('aroma-short-table', require('./components/UI/tables/AromaShortTable').default);
Vue.component('aroma-short-table-item', require('./components/UI/tables/AromaShortTableItem').default);
Vue.component('search-aroma-sidebar', require('./components/UI/aroma-vis/filters/SearchAromaSidebar').default);
Vue.component('multi-carousel', require('./components/UI/MultiCarousel').default);
Vue.component('multi-carousel-aroma-filter', require('./components/UI/MultiCarouselAromaFilter').default);
Vue.component('news-item', require('./components/UI/news/NewsItem').default);
Vue.component('news-detail', require('./components/UI/news/NewsDetail').default);
Vue.component('remove-order-modal', require('./components/Modals/RemoveOrderModal').default);
Vue.component('edit-order-modal', require('./components/Modals/EditOrderModal').default);
Vue.component('reviews-page', require('./components/views/ReviewsPage').default);
Vue.component('can-create-review-modal', require('./components/Modals/CanCreateReviewModal').default);
Vue.component('cannot-create-review-modal', require('./components/Modals/CannotCreateReviewModal').default);
Vue.component('created-review-modal-success', require('./components/Modals/CreatedReviewModalSuccess').default);
Vue.component('user-payment-page', require('./components/views/UserPaymentPage').default);
Vue.component('user-my-bank-panel', require('./components/views/UserMyBankPanel').default);
Vue.component('user-my-bank-bonus-mark-account', require('./components/views/UserMyBankBonusMarkAccount').default);
Vue.component('user-my-bank-bonus-mark-report', require('./components/views/UserMyBankBonusMarkReport').default);
Vue.component('user-my-bank-main-account', require('./components/views/UserMyBankMainAccount').default);
Vue.component('user-my-bank-main-report', require('./components/views/UserMyBankMainReport').default);
Vue.component('find-receiver', require('./components/page-parts/user-bank/FindReceiver').default);
Vue.component('transfer-bonus-mark', require('./components/page-parts/user-bank/TransferBonusMark').default);
Vue.component('transfer-bonus-rub', require('./components/page-parts/user-bank/TransferBonusRub').default);
Vue.component('transfer-reserve-pvc', require('./components/page-parts/user-bank/TransferReservePVC').default);
Vue.component('user-my-bank-reserve-account', require('./components/views/UserMyBankReserveAccount').default);
Vue.component('user-my-bank-reserve-report', require('./components/views/UserMyBankReserveReport').default);
Vue.component('admin-page', require('./components/admin/AdminPage').default);
Vue.component('admin-navbar', require('./components/admin/AdminNavbar').default);
Vue.component('transaction-types', require('./components/admin/trasaction-type/TransactionTypes').default);
Vue.component('transaction-type-index', require('./components/admin/trasaction-type/TransactionsTypeIndex').default);
Vue.component('transaction-type-index-item', require('./components/admin/trasaction-type/TransactionTypeIndexItem').default);
Vue.component('transaction-type-create', require('./components/admin/trasaction-type/TransactionTypeCreate').default);
Vue.component('transaction-type-update', require('./components/admin/trasaction-type/TransactionTypeUpdate').default);
Vue.component('wallet-page', require('./components/admin/wallet/WalletPage').default);
Vue.component('wallet-index', require('./components/admin/wallet/WalletIndex').default);
Vue.component('wallet-index-item', require('./components/admin/wallet/WalletIndexItem').default);
Vue.component('wallet-create', require('./components/admin/wallet/WalletCreate').default);
Vue.component('wallet-update', require('./components/admin/wallet/WalletUpdate').default);
Vue.component('transaction-page', require('./components/admin/transaction/TransactionPage').default);
Vue.component('transaction-index', require('./components/admin/transaction/TransactionIndex').default);
Vue.component('transaction-index-item', require('./components/admin/transaction/TransactionIndexItem').default);
Vue.component('transaction-create', require('./components/admin/transaction/TransactionCreate').default);
Vue.component('transaction-update', require('./components/admin/transaction/TransactionUpdate').default);
Vue.component('pv-account-page', require('./components/admin/pv-account/PVAccountPage').default);
Vue.component('pv-account-index', require('./components/admin/pv-account/PVAccountIndex').default);
Vue.component('pv-account-index-item', require('./components/admin/pv-account/PVAccountIndexItem').default);
Vue.component('pv-account-create', require('./components/admin/pv-account/PVAccountCreate').default);
Vue.component('pv-account-update', require('./components/admin/pv-account/PVAccountUpdate').default);
Vue.component('main-account-report-table', require('./components/UI/tables/MainAccountReportTable').default);
Vue.component('main-account-report-table-item', require('./components/UI/tables/MainAccountReportTableItem').default);
Vue.component('user-my-bank-bonus-rub-account', require('./components/views/UserMyBankBonusRubAccount').default);
Vue.component('user-my-bank-bonus-rub-report', require('./components/views/UserMyBankBonusRubReport').default);
Vue.component('bonus-report-table', require('./components/UI/tables/BonusReportTable').default);
Vue.component('bonus-report-table-item', require('./components/UI/tables/BonusReportTableItem').default);
Vue.component('user-sidebar', require('./components/UI/UserSidebar').default);
Vue.component('transfer-cash-to-main-account', require('./components/page-parts/user-bank/TransferCashToMainAccount').default);
Vue.component('transfer-main-account-sc', require('./components/page-parts/user-bank/TransferMainAccountSC').default);
Vue.component('btn-invite', require('./components/UI/buttons/BtnInvite').default);
Vue.component('user-work-sc-page', require('./components/views/UserWorkSCPage').default);
Vue.component('user-sc-fill-main-account', require('./components/views/user-sc/UserSCFillMainAccount').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store
});
