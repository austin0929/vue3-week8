<template>
  <BannerCp></BannerCp>
  <ChooseCp></ChooseCp>
  <CustomerCp></CustomerCp>
  <CardCp></CardCp>
  <PromiseSection></PromiseSection>
</template>

<script>
import BannerCp from "@/components/usercomponents/BannerSection.vue";
import CardCp from "@/components/usercomponents/CardSection.vue";
import ChooseCp from "@/components/usercomponents/ChooseSection.vue";
import CustomerCp from "@/components/usercomponents/CustomerSection.vue";
import PromiseSection from "@/components/usercomponents/PromiseSection.vue";
export default {
  components: {
    BannerCp,
    CardCp,
    ChooseCp,
    CustomerCp,
    PromiseSection,
  },
};
</script>