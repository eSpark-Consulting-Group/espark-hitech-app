<template>
  <div>
    <div class="table-container mt-4">
      <table class="table table-striped">
        <thead>
          <tr class="table-head">
            <th
              scope="col"
              v-for="(key, index) in Object.keys(items[0])"
              :key="index"
              :class="{ sorted: sortColumn === key }"
              @click="sortTable(key)"
              style="
                background-color: #01b7a1;
                color: white;
                border: 1px solid #fff;
                white-space: nowrap;
                padding-left: 0px;
              "
            >
              <div
                class="d-flex justify-content-between"
                style="margin-right: 0px; margin-left: 0px"
              >
                <div style="padding-left: 1rem">
                  {{ key }}
                </div>
                <div>
                  <span class="sort-icon" v-if="sortColumn === key">
                    <i
                      class="fas"
                      :class="
                        sortOrder === 'asc' ? 'fa-sort-up' : 'fa-sort-down'
                      "
                    ></i>
                  </span>
                  <span class="sort-icon" v-else>
                    <i class="fas fa-sort-down"></i>
                  </span>
                </div>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in paginatedItems" :key="index">
            <td v-for="value in Object.values(item)" :key="value">
              <a
                href="javascript:void(0)"
                @click.prevent="$router.push('/product/' + 1)"
                class="font-default"
              >
                {{ value }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav class="page-section" v-if="totalPages > 1">
      <ul class="pagination">
        <li class="page-item">
          <a
            href="javascript:void(0)"
            class="page-link"
            @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1"
          >
            <i class="fas fa-chevron-left"></i>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pages"
          :key="page"
          :class="page === currentPage ? 'active' : ''"
        >
          <a
            class="page-link"
            href="javascript:void(0)"
            @click.prevent="changePage(page)"
          >
            {{ page }}
          </a>
        </li>

        <li class="page-item">
          <a
            href="javascript:void(0)"
            class="page-link"
            @click="changePage(currentPage + 1)"
            :disabled="currentPage === totalPages"
          >
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// item['Mfr Part #']
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    items: {
      type: Array,
    },
  },
  data() {
    return {
      totalCards: 8,
      currentPage: 1,
      totalPages: 1,
      cardsToShow: 3,
      sortColumn: 'defaultColumnName',
      sortOrder: 'asc',
      filter: null,
    }
  },
  computed: {
    filteredItems() {
      if (!this.filter) {
        return this.items
      }
      return this.items.filter((item) => {
        // Replace `fieldName` with the actual field name you want to filter on
        return item.fieldName === this.filter
      })
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.cardsToShow
      const endIndex = startIndex + this.cardsToShow
      const sortedItems = this.sortItems()
      return sortedItems.slice(startIndex, endIndex)
      // return this.items.slice(startIndex, endIndex)
    },
    pages() {
      const pages = []
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i)
      }
      return pages
    },
  },
  watch: {
    items() {
      this.calculateTotalPages()
    },
  },
  created() {
    this.calculateTotalPages()
  },
  methods: {
    // changePage(page) {
    //   if (page >= 1 && page <= this.totalPages) {
    //     this.currentPage = page
    //   }
    // },
    changePage(toPage) {
      if (toPage > 0 && toPage <= this.totalPages) {
        const filteredItems = this.filteredItems
        const totalPages = Math.ceil(filteredItems.length / this.cardsToShow)

        if (toPage > totalPages) {
          toPage = totalPages
        }

        this.currentPage = toPage
        this.calculateTotalPages()
      }
    },
    calculateTotalPages() {
      this.totalPages = Math.ceil(this.items.length / this.cardsToShow)
    },
    sortTable(column) {
      if (this.sortColumn === column) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortColumn = column
        this.sortOrder = 'asc'
      }
    },
    sortItems() {
      if (this.sortColumn) {
        // console.log('sorting', this.items)
        return this.items.slice().sort((a, b) => {
          this.changePage(1)
          const valueA = a[this.sortColumn]
          const valueB = b[this.sortColumn]
          if (valueA < valueB) return this.sortOrder === 'asc' ? -1 : 1
          if (valueA > valueB) return this.sortOrder === 'asc' ? 1 : -1
          return 0
        })
      }
      // console.log('sorting', this.items)
      return this.items
    },
  },
}
</script>

<style>
.table-container {
  overflow-x: auto;
  max-width: 100%;
}

.table {
  min-width: 800px; /* Adjust the value as needed */
}

.table td {
  white-space: nowrap;
}

.page-link:focus {
  background-color: #01b7a1 !important;
}
.table th.sorted {
  background-color: #02a895;
  color: white;
}

.sort-icon {
  margin-left: 5px;
}

.sort-icon i {
  font-size: 10px;
}
</style>
