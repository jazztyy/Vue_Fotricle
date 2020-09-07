<template>
        <div class="keep-footer-bottom flex flex-col lg:flex-row justify-evenly lg:items-start py-10">
            <Aside/>
            <router-view />
        </div>
</template>

<script>
import Aside from '../../../components/Brand/Aside'

export default {
  name: 'Edit',
  components: {
    Aside
  }
}
</script>
