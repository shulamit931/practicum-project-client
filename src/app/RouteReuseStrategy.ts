import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class MyRouteReuseStrategy implements RouteReuseStrategy {
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        const path = route.routeConfig.path;
        return path && ['myForm'].includes(path);
    }
    private routeStore = new Map<string, DetachedRouteHandle>();
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        this.routeStore.set(route.routeConfig.path, handle);
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        const path = route.routeConfig.path;
        return (
            path && ['myForm'].includes(path) && !!this.routeStore.get(path)
        );
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        const path = route.routeConfig.path;
        return this.routeStore.get(path);
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }

}
