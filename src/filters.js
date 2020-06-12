import Vue from 'vue'

Vue.filter('fechaFiltro', function(value) {
    return value.substr(8,2)+"/"+value.substr(5,2)+"/"+value.substr(0,4)+" "+value.substr(11,8)
    
})