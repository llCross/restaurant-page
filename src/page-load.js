import {renderHomePage} from './home';
import {renderTabs} from './tabs';

export function pageLoad() {
    renderTabs();
    renderHomePage();
};