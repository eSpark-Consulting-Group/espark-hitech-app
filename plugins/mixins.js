import Vue from "vue";

Vue.mixin({
  methods: {
    async addToWishlist(product) {
      var isPresentInWishlist = false;
      let messageToShow = "";
      await this.$store
        .dispatch("products/addToWishlist", product)
        .then((res) => {
          isPresentInWishlist = res;
        });
      isPresentInWishlist
        ? (messageToShow = "Already in Wishlist")
        : (messageToShow = "Added to Wishlist");
      this.$store.dispatch("clickEvents/toggleSuccessfulModal", {
        image: product.images[0].src,
        message: messageToShow,
        link: this.$const.wishlistPagePath,
      });
    },
    toggleCartModal(product) {
      var item = { product: product, quantity: 1 };
      this.$store.dispatch("cart/addToCart", item);
      this.$store.dispatch("clickEvents/changeProductId", product.id);
    },

    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
    // to change quantity of cartItems
    //     event = $event
    // product = {
    //     productid,quantity
    // }
    changeQuantityMixin(event, product) {
      let payload = {
        productId: product.id,
        quantity:
          parseInt(event.target.value) > product.inStock
            ? product.inStock
            : parseInt(event.target.value),
      };
      this.$store.dispatch("cart/changeQuantityTo", payload);
    },

    addTocompareMixin(product) {
      let payload = {
        image: product.images[0].src,
        message: "Added To compare",
      };
      this.$store.dispatch("compare/addToCompare", product.id);
      this.$store.dispatch("clickEvents/toggleSuccessfulModal", payload);
    },
  },
});
