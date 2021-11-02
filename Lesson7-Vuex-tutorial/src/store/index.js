import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
	storage: window.localStorage
})

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		books: [],
		currentId: 0,
		deletedBooks: []
	},
	getters: {
		getBooks: (state) => state.books,
		getCurrentId: (state) => state.currentId,
		getDeletedBooks: (state) => state.deletedBooks,
		getBookById: (state) => id => {
			return state.books.find(item => item.id === id)
		},
		getDeletedBookById: (state) => id => {
			return state.deletedBooks.find(item => item.id === id)
		},
		getUpdatedBooks: (state) => id => {
			return state.books.filter(item => item.id !== id)
		},
		getUpdatedDeletedBooks: (state) => id => {
			return state.deletedBooks.filter(item => item.id !== id)
		}
	},
	mutations: {
		setBooks: (state, payload) => state.books.push(payload),
		setCurrentId: (state) => state.currentId += 1,
		setDeletedBooks:(state, payload) => state.deletedBooks.push(payload),
		updateBooks: (state, payload) => state.books = payload,
		updateDeletedBooks: (state, payload) => state.books = payload
	},
	actions: {
		addBook(context, payload) {
			const currentId = context.state.currentId
			const data = {
				...payload,
				id: currentId,
			};
			context.commit('setBooks', data)
			context.commit('setCurrentId')
		},
		deleteBook(context, payload) {
			const currentBook = context.getters.getBookById(payload)
			const updatedBooks = context.getters.getUpdatedBooks(payload)
			context.commit('updateBooks', updatedBooks)
			context.commit('setDeletedBooks', currentBook)
		},
		restoreBook(context, payload) {
			const currentBook = context.getters.getDeletedBookById(payload)
			const updatedDeletedBooks = context.getters.getUpdatedDeletedBooks(payload)
			context.commit('updateDeletedBooks', updatedDeletedBooks)
			context.commit('setBooks', currentBook)
		}
	},
	plugins: [vuexLocal.plugin]
})