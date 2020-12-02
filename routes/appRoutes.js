import {addNewRevenue , getAllRevenue  , getRevenueWithId , updateRevenue , deleteRevenue} from "../controllers/revenueControllers";

const routes = (app) => {
    app.route('/revenue')
        .get(getAllRevenue)
        .post(addNewRevenue);   
        
    app.route('/revenue/:revenueId')
    .get(getRevenueWithId)
    .put(updateRevenue)
    .delete(deleteRevenue);    
}

export default routes;