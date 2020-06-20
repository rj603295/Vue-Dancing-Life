<template>
  <div>
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled': !pages.has_pre}">
        <a class="page-link" href="#" @click.prevent="changePage(pages.current_page-1)" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{'active': pages.current_page === page}"><a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a></li>
      <li class="page-item" :class="{'disabled': !pages.has_next}">
        <a class="page-link" href="#" @click.prevent="changePage(pages.current_page+1)" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name:"pagination",   
  props: ["pages"],
  data(){
    return{

    }
  },
  methods: {
    changePage(page){
      const vm = this;
      vm.$emit("diffPage", page)
    }
  }
}
</script>