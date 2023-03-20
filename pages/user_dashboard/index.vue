<template>
  <div>
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <ul
              class="nav nav-tabs custome-nav-tabs flex-column category-option"
              id="myTab"
              :class="{ show: dashboardLinks }"
            >
              <li
                class="nav-item mb-2"
                v-for="(link, index) in allLinks"
                :key="index"
              >
                <button
                  class="nav-link font-light"
                  :class="activeTab[link.link] ? 'active' : ''"
                  @click="setActiveTab(link.link)"
                  id="tab"
                  data-bs-toggle="tab"
                  data-bs-target="#dash"
                >
                  <i class="fas fa-angle-right"></i>{{ link.name }}
                </button>
              </li>
            </ul>
          </div>

          <div class="col-lg-9">
            <div class="filter-button dash-filter dashboard">
              <button
                class="btn btn-solid-default btn-sm fw-bold filter-btn"
                @click.prevent="toggleDashboardLinks"
              >
                "Show Menu"
              </button>
            </div>

            <div class="tab-content" id="myTabContent">
              <myDashboard v-if="activeTab['myDashboard']" />
              <OrdersView v-else-if="activeTab['orders']" />
              <WishList v-else-if="activeTab['wishlist']" />
              <savedAddress v-else-if="activeTab['savedAddress']" />
              <PaymentView v-else-if="activeTab['payment']" />
              <ProfileView v-else-if="activeTab['profile']" />
              <SecurityView v-else-if="activeTab['security']" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <AddAddressModal />
    <ConfirmDeleteAccountModal />
    <DeleteAccountModal />
    <EditProfileModal />
    <PaymentModal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import myDashboard from '../../components/Section/Elements/UserDashboard/myDashboard.vue'
import OrdersView from '../../components/Section/Elements/UserDashboard/OrdersView.vue'
import WishList from '../../components/Section/Elements/UserDashboard/WishList.vue'
import savedAddress from '../../components/Section/Elements/UserDashboard/savedAddress.vue'
import PaymentView from '../../components/Section/Elements/UserDashboard/PaymentView.vue'
import ProfileView from '../../components/Section/Elements/UserDashboard/ProfileView.vue'
import SecurityView from '../../components/Section/Elements/UserDashboard/SecurityView.vue'
import AddAddressModal from '../../components/Section/Elements/UserDashboard/Modals/AddAddressModal.vue'
import ConfirmDeleteAccountModal from '../../components/Section/Elements/UserDashboard/Modals/ConfirmDeleteAccountModal.vue'
import DeleteAccountModal from '../../components/Section/Elements/UserDashboard/Modals/DeleteAccountModal.vue'
import EditProfileModal from '../../components/Section/Elements/UserDashboard/Modals/EditProfileModal.vue'
import PaymentModal from '../../components/Section/Elements/UserDashboard/Modals/PaymentModal.vue'

export default {
  head() {
    return {
      title: 'User dashboard',
    }
  },
  components: {
    myDashboard,
    OrdersView,
    WishList,
    savedAddress,
    PaymentView,
    ProfileView,
    SecurityView,
    AddAddressModal,
    ConfirmDeleteAccountModal,
    DeleteAccountModal,
    EditProfileModal,
    PaymentModal,
  },
  created() {
    this.setBreadcrumbs({
      pageParent: 'User dashboard',
      pageName: 'User dashboard',
    })
  },
  data() {
    return {
      activeTab: { myDashboard: true },
      dashboardLinks: false,
      allLinks: [
        { name: 'Dashboard', link: 'myDashboard' },
        { name: 'Orders', link: 'orders' },
        { name: 'Wishlist', link: 'wishlist' },
        { name: 'Saved Address', link: 'savedAddress' },
        { name: 'Payment', link: 'payment' },
        { name: 'Profile', link: 'profile' },
        { name: 'Security', link: 'security' },
      ],
    }
  },
  computed: {
    ...mapState({
      //   dashboardLinks: (state) => state.clickEvents.dashboardLinks,
      showAddAddressModal: (state) => state.clickEvents.showAddAddressModal,
      showPaymentModal: (state) => state.clickEvents.showPaymentModal,
      showDeleteAccountModal: (state) =>
        state.clickEvents.showDeleteAccountModal,
      showConfirmDeleteAccount: (state) =>
        state.clickEvents.showConfirmDeleteAccount,
      showEditProfileModal: (state) => state.clickEvents.showEditProfileModal,
    }),
  },
  methods: {
    toggleDashboardLinks() {
      this.$store.dispatch('clickEvents/toggleDashboardLinks')
      console.log('Toggle')
    },
    setActiveTab(tab) {
      this.activeTab = {}
      this.activeTab[tab] = true
    },
  },
}
</script>

<style lang="scss" scoped></style>
